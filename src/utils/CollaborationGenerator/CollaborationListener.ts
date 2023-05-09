import { CollaborationGraph } from "@/types/collaborationGraph";
import { CollaborationGrammarListener } from "./CollaborationGrammarUtil/CollaborationGrammarListener";
import { DeclareStmtContext, LinkStmtContext } from "./CollaborationGrammarUtil/CollaborationGrammarParser";

export class CollaborationListener implements CollaborationGrammarListener {
    collaborationGraph: CollaborationGraph; // 输出结果，通信图
    objectId: number; // 对象 id
    linkId: number; // 链 id
    error: boolean; // 是否报错
    errorContent?: string; // 报错内容
    constructor() {
        this.collaborationGraph = {objectList: [], linkList: []};
        this.objectId = 0;
        this.linkId = 0;
        this.error = false;
    }
    // 创建对象
    enterDeclareStmt(ctx: DeclareStmtContext){
        const name = this.removeQuote(ctx.IDENT().toString());
        const tag = this.removeQuote(ctx.STRING().toString());
        for (const obj of this.collaborationGraph.objectList) {
            if (obj.name === name) {
                this.error = true;
                this.errorContent = "参与者命名重复";
                return;
            }
        }
        this.objectId++;
        this.collaborationGraph.objectList.push({
            objectId: this.objectId,
            name,
            tag,
        })
    }
    // 创建链
    enterLinkStmt(ctx: LinkStmtContext){
        const ident = ctx.IDENT();
        const nameA = this.removeQuote(ident[0].toString());
        const nameB = this.removeQuote(ident[1].toString());
        const str = ctx.STRING()
        const contentA = this.removeQuote(str[0].toString());
        const contentB = this.removeQuote(str[1].toString());
        let objAId = -1;
        let objBId = -1;
        for (const obj of this.collaborationGraph.objectList) {
            if (obj.name === nameA) {
                objAId = obj.objectId;
            }
            if (obj.name === nameB) {
                objBId = obj.objectId;
            }
        }
        this.linkId++;
        this.collaborationGraph.linkList.push({
            linkId: this.linkId,
            objAId,
            objBId,
            contentA,
            contentB,
        })
    }

    // 去除双引号
    removeQuote(content: string){
        if (content.length >= 2 && ((content[0] === '\"' && content[content.length - 1] === '\"') || (content[0] === '\'' && content[content.length - 1] === '\''))) {
            return content.substring(1, content.length - 1);
        }
        return content;
    }
}