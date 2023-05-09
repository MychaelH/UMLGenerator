import { ArrowType, FragmentType, SequenceGraph } from "@/types/sequenceGraph";
import { ParticipantType } from "@/types/sequenceGraph";
import { Opens } from "antd/es/slider";
import type { SequenceGrammarListener } from "./SequenceGrammarUtil/SequenceGrammarListener";
import type { ActivateContext, AltContext, BlockContext, CreateContext, DeactivateContext, DeclContext, DestroyContext, ElseContext, LoopContext, MessageSendContext, ObjectContext, ObjTypeContext, OptContext, ParContext, RefContext, StmtContext } from "./SequenceGrammarUtil/SequenceGrammarParser";

// 激活状态记录
type ActivateRecord = {
    participantId: number; // 时间线对应参与者 id
    beginSpotStack: number[]; // 栈，储存当前正在激活区间的开端
}

export class SequenceListener implements SequenceGrammarListener {
    sequenceGraph: SequenceGraph; // 输出结果，顺序图
    error: boolean; // 是否报错
    errorContent?: string; // 报错内容
    participantId: number; // 参与者 id
    lineId: number; // 消息 id，递增
    fragmentId: number; // 片段 id
    activateRecordList: ActivateRecord[]; // 激活状态记录
    fragmentIdStack: number[]; // 片段栈，记录当前片段覆盖信息
    constructor() {
        this.sequenceGraph = {participantList: [], messageList: [], fragmentList: [], maxLineId: 0};
        this.error = false;
        this.participantId = 0;
        this.lineId = 0;
        this.fragmentId = 0;
        this.activateRecordList = [];
        this.fragmentIdStack = [];
    }
    enterStmt(ctx: StmtContext) {
        if (this.error) {
            return;
        }
        // console.log(ctx.childCount);
        // 创建参与者
        const decl: DeclContext | undefined = ctx.decl();
        if (decl !== undefined) {
            this.createParticipant(this.removeQuote(decl.IDENT().toString()), decl.objType().text);
        }
        // 创建消息
        const messageSend: MessageSendContext | undefined = ctx.messageSend();
        if (messageSend !== undefined) {
            const object: ObjectContext[] = messageSend.object();
            this.createArrow(
                this.removeQuote(object[0].text),
                this.removeQuote(object[1].text),
                messageSend.messageType().text,
                this.removeQuote(messageSend.STRING().text),
            );
            
        }
        // 参与者创建参与者
        const create: CreateContext | undefined = ctx.create();
        if (create !== undefined) {
            const object: ObjectContext[] = create.messageSend().object();
            this.createParticipant(this.removeQuote(create.decl().IDENT().toString()), create.decl().objType().text, this.lineId + 1);
            this.createArrow(
                this.removeQuote(object[0].text),
                this.removeQuote(object[1].text),
                create.messageSend().messageType().text,
                "<<create>> " + this.removeQuote(create.messageSend().STRING().toString())
            );
        }
        // 销毁参与者
        const destroy: DestroyContext | undefined = ctx.destroy();
        if (destroy !== undefined) {
            const name = this.removeQuote(destroy.IDENT().toString());
            const participant = this.sequenceGraph.participantList?.find(v => v.name === name);
            if (participant){
                participant.endSpot = this.lineId;
            } else {
                this.error = true;
                this.errorContent = "参与者不存在";
                return;
            }
        }
        // 激活参与者时间线
        const activate: ActivateContext | undefined = ctx.activate();
        if (activate !== undefined) {
            const name = this.removeQuote(activate.IDENT().toString());
            const participant = this.sequenceGraph.participantList?.find(v => v.name === name);
            if (participant) {
                let activateRecord: ActivateRecord | undefined = undefined;
                for (const record of this.activateRecordList) {
                    if (record.participantId === participant.participantId){
                        activateRecord = record;
                        break;
                    }
                }
                if (activateRecord === undefined){
                    this.activateRecordList.push({participantId: participant.participantId, beginSpotStack: []});
                    activateRecord = this.activateRecordList[this.activateRecordList.length - 1];
                }
                activateRecord.beginSpotStack.push(this.lineId);
            } else {
                this.error = true;
                this.errorContent = "参与者不存在";
                return;
            }
        }
        // 结束参与者时间线
        const deactivate: DeactivateContext | undefined = ctx.deactivate();
        if (deactivate !== undefined) {
            const name = this.removeQuote(deactivate.IDENT().toString());
            const participant = this.sequenceGraph.participantList?.find(v => v.name === name);
            if (participant) {
                let activateRecord: ActivateRecord | undefined = undefined;
                for (const record of this.activateRecordList) {
                    if (record.participantId === participant.participantId){
                        activateRecord = record;
                        break;
                    }
                }
                if (activateRecord === undefined){
                    this.error = true;
                    this.errorContent = "该参与者时间线未激活";
                    return;
                }
                participant.activatedSegmentList.push({
                    beginSpot: activateRecord.beginSpotStack[activateRecord.beginSpotStack.length - 1],
                    endSpot: this.lineId + 0.5,
                    level: activateRecord.beginSpotStack.length
                });
                activateRecord.beginSpotStack.pop();
            } else {
                this.error = true;
                this.errorContent = "参与者不存在";
                return;
            }
        }
    }

    // 进入可选片段
    enterOpt(ctx: OptContext) {
        this.sequenceGraph.fragmentList?.push({
            fragmentId: ++this.fragmentId,
            type: FragmentType.OPT,
            description: this.removeQuote(ctx.STRING().toString()),
            beginLineId: ++this.lineId,
            subFragmentIdList: []
        });
        if (this.fragmentIdStack.length > 0) {
            const lastId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
            const parentFragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === lastId);
            if (parentFragment) {
                parentFragment.subFragmentIdList.push(this.fragmentId);
            }
        }
        this.fragmentIdStack.push(this.fragmentId);
    }

    // 退出可选片段
    exitOpt(ctx: OptContext) {
        const fragId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
        this.fragmentIdStack.pop();
        const fragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === fragId);
        if (fragment && fragment.type === FragmentType.OPT){
            fragment.endLineId = ++this.lineId;
        } else {
            this.error = true;
            this.errorContent = "片段堆栈错误";
            return;
        }
    }

    // 进入循环片段
    enterLoop(ctx: LoopContext) {
        this.sequenceGraph.fragmentList?.push({
            fragmentId: ++this.fragmentId,
            type: FragmentType.LOOP,
            description: this.removeQuote(ctx.STRING().toString()),
            beginLineId: ++this.lineId,
            subFragmentIdList: []
        });
        if (this.fragmentIdStack.length > 0) {
            const lastId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
            const parentFragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === lastId);
            if (parentFragment) {
                parentFragment.subFragmentIdList.push(this.fragmentId);
            }
        }
        this.fragmentIdStack.push(this.fragmentId);
    }

    // 退出循环片段
    exitLoop(ctx: LoopContext) {
        const fragId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
        this.fragmentIdStack.pop();
        const fragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === fragId);
        if (fragment && fragment.type === FragmentType.LOOP){
            fragment.endLineId = ++this.lineId;
        } else {
            this.error = true;
            this.errorContent = "片段堆栈错误";
            return;
        }
    }

    // 进入并行片段
    enterPar(ctx: ParContext) {
        this.sequenceGraph.fragmentList?.push({
            fragmentId: ++this.fragmentId,
            type: FragmentType.PAR,
            description: this.removeQuote(ctx.STRING().toString()),
            beginLineId: ++this.lineId,
            subFragmentIdList: []
        });
        if (this.fragmentIdStack.length > 0) {
            const lastId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
            const parentFragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === lastId);
            if (parentFragment) {
                parentFragment.subFragmentIdList.push(this.fragmentId);
            }
        }
        this.fragmentIdStack.push(this.fragmentId);
    }

    // 退出并行片段
    exitPar(ctx: ParContext) {
        const fragId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
        this.fragmentIdStack.pop();
        const fragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === fragId);
        if (fragment && fragment.type === FragmentType.PAR){
            fragment.endLineId = ++this.lineId;
        } else {
            this.error = true;
            this.errorContent = "片段堆栈错误";
            return;
        }
    }

    // 进入分支片段
    enterAlt(ctx: AltContext) {
        this.sequenceGraph.fragmentList?.push({
            fragmentId: ++this.fragmentId,
            type: FragmentType.ALT,
            description: this.removeQuote(ctx.STRING().toString()),
            beginLineId: ++this.lineId,
            dividerList: [],
            subFragmentIdList: []
        });
        if (this.fragmentIdStack.length > 0) {
            const lastId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
            const parentFragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === lastId);
            if (parentFragment) {
                parentFragment.subFragmentIdList.push(this.fragmentId);
            }
        }
        this.fragmentIdStack.push(this.fragmentId);
    }

    // 退出分支片段
    exitAlt(ctx: AltContext) {
        const fragId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
        this.fragmentIdStack.pop();
        const fragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === fragId);
        if (fragment && fragment.type === FragmentType.ALT){
            fragment.endLineId = ++this.lineId;
        } else {
            this.error = true;
            this.errorContent = "片段堆栈错误";
            return;
        }
    }

    // 进入分支片段 else 分支
    enterElse(ctx: ElseContext) {
        const fragId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
        const fragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === fragId);
        if (fragment && fragment.type === FragmentType.ALT){
            fragment.dividerList?.push({lineId: ++this.lineId, content: this.removeQuote(ctx.STRING().toString())});
        } else {
            this.error = true;
            this.errorContent = "片段堆栈错误";
            return;
        }
    }

    // 进入交互片段
    enterRef(ctx: RefContext) {
        const identList = ctx.IDENT();
        let beginId: number | undefined = undefined;
        let endId: number | undefined = undefined;
        for (const ident of identList) {
            const name = this.removeQuote(ident.toString());
            const participant = this.sequenceGraph.participantList.find(v => v.name === name);
            if (participant){
                if (beginId === undefined || participant.participantId < beginId) {
                    beginId = participant.participantId
                }
                if (endId === undefined || participant.participantId > endId) {
                    endId = participant.participantId
                }
            } else {
                this.error = true;
                this.errorContent = "参与者不存在";
                return;
            }
        }
        this.lineId++;
        this.sequenceGraph.fragmentList?.push({
            fragmentId: ++this.fragmentId,
            type: FragmentType.REF,
            description: this.removeQuote(ctx.STRING().toString()),
            beginLineId: this.lineId,
            endLineId: this.lineId + 1,
            beginParticipantId: beginId,
            endParticipantId: endId,
            subFragmentIdList: []
        });
        this.lineId++;
        if (this.fragmentIdStack.length > 0) {
            const lastId = this.fragmentIdStack[this.fragmentIdStack.length - 1];
            const parentFragment = this.sequenceGraph.fragmentList?.find(v => v.fragmentId === lastId);
            if (parentFragment) {
                parentFragment.subFragmentIdList.push(this.fragmentId);
            }
        }
    }

    // 退出模块
    exitBlock(ctx: BlockContext) {
        // console.log(ctx._parent);
        // 最后的出口
        if (ctx._parent === undefined) {
            // 将所有仍未结束激活的片段停止
            for (const activateRecord of this.activateRecordList) {
                const participant = this.sequenceGraph.participantList?.find(v => v.participantId === activateRecord.participantId);
                if (participant) {
                    while (activateRecord.beginSpotStack && activateRecord.beginSpotStack.length > 0) {
                        participant.activatedSegmentList.push({
                            beginSpot: activateRecord.beginSpotStack[activateRecord.beginSpotStack.length - 1],
                            endSpot: this.lineId + 0.5,
                            level: activateRecord.beginSpotStack.length
                        });
                        activateRecord.beginSpotStack.pop();
                    }
                } else {
                    this.error = true;
                    this.errorContent = "参与者不存在";
                    return;
                }
            }
            this.sequenceGraph.maxLineId = this.lineId;
        }
    }

    // 创建参与者
    createParticipant(name: string, objType: string, createSpot?: number){
        // 检查名字的唯一性
        for (const participant of this.sequenceGraph.participantList ?? []){
            if (participant.name === name){
                this.error = true;
                this.errorContent = "参与者命名重复";
                return;
            }
        }
        let participantType: ParticipantType = ParticipantType.CUSTOM;
        // console.log("object type: " + objType);
        switch(objType) {
            case 'actor': participantType = ParticipantType.ACTOR; break;
            case 'boundary': participantType = ParticipantType.BOUNDARY; break;
            case 'control': participantType = ParticipantType.CONTROL; break;
            case 'database': participantType = ParticipantType.DATABASE; break;
            case 'entity': participantType = ParticipantType.ENTITY; break;
            case 'collections': participantType = ParticipantType.COLLECTIONS; break;
            case 'queue': participantType = ParticipantType.QUEUE; break;
            case 'participant': participantType = ParticipantType.CUSTOM; break;
            default: this.error = true; this.errorContent = "不存在的objType"; return;
        }
        this.participantId++;
        this.sequenceGraph.participantList?.push({
            participantId: this.participantId,
            type: participantType,
            name,
            activatedSegmentList: [],
            createSpot,
        });
    }

    // 创建消息
    createArrow(senderName: string, receiverName: string, messageType: string, content: string) {
        let senderId = -1;
        let receiverId = -1;
        for (const participant of this.sequenceGraph.participantList ?? []){
            if (participant.name === senderName){
                senderId = participant.participantId;
            }
            if (participant.name === receiverName){
                receiverId = participant.participantId;
            }
        }
        if (senderId === -1 || receiverId === -1) {
            this.error = true;
            this.errorContent = "参与者未声明";
            return;
        }
        let arrowType: ArrowType = ArrowType.REQUEST;
        switch(messageType) {
            case '->': arrowType = ArrowType.REQUEST; break;
            case '-->': arrowType = ArrowType.RESPONSE; break;
            case '->>': arrowType = ArrowType.MESSAGE; break;
            case '-x>': arrowType = ArrowType.SYNCHRONOUS; break;
            case '-\\\\': arrowType = ArrowType.ASYNCHRONOUS; break;
            default: this.error = true; this.errorContent = "不存在的messageType"; return;
        }
        this.lineId++;
        this.sequenceGraph.messageList?.push({
            msgId: this.lineId,
            content: content,
            fromParticipantId: senderId,
            toParticipantId: receiverId,
            arrowType: arrowType
        });
        this.updateFragmentList(senderId, receiverId);
    }

    // 更新所有未结束的片段
    updateFragmentList(senderId: number, receiverId: number) {
        for (const fragment of this.sequenceGraph.fragmentList) {
            if (fragment.endLineId === undefined) {
                if (senderId && (fragment.beginParticipantId === undefined || senderId < fragment.beginParticipantId)) {
                    fragment.beginParticipantId = senderId;
                }
                if (receiverId && (fragment.endParticipantId === undefined || receiverId > fragment.endParticipantId)) {
                    fragment.endParticipantId = receiverId;
                }
            }
        }
    }

    // 去除双引号
    removeQuote(content: string){
        if (content.length >= 2 && ((content[0] === '\"' && content[content.length - 1] === '\"') || (content[0] === '\'' && content[content.length - 1] === '\''))) {
            return content.substring(1, content.length - 1);
        }
        return content;
    }
}
