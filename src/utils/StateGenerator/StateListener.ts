import { Node, NodeType, StateGraph } from "@/types/stateGraph";
import { StateGrammarListener } from "./StateGrammarUtil/StateGrammarListener";
import { DeclareContext, TransferContext } from "./StateGrammarUtil/StateGrammarParser";

export class StateListener implements StateGrammarListener {
    stateGraph: StateGraph; // 输出结果，顺序图
    nodeId: number; // 节点 id 记录
    linkId: number; // 链接 id 记录
    parentStack: number[]; // 祖先 id 记录栈
    error: boolean; // 是否报错
    errorContent?: string; // 报错内容

    constructor() {
        this.stateGraph = {nodeList: [], linkList: []};
        this.error = false;
        this.nodeId = 0;
        this.linkId = 0;
        this.parentStack = [];
    }

    enterDeclare(ctx: DeclareContext) {
        const name = this.removeQuote(ctx.IDENT().toString());
        if (this.stateGraph.nodeList.find(node => node.name === name) !== undefined) {
            this.error = true;
            this.errorContent = "重复的命名";
        }
        this.nodeId++;
        const parentId = this.parentStack.length > 0 ? this.parentStack[this.parentStack.length - 1] : undefined;
        const content = ctx.STRING()?.toString();
        const block = ctx.block();
        let nodeType = NodeType.COMMON;
        if (block === undefined && content === undefined) {
            nodeType = NodeType.CHOICE;
        }
        this.stateGraph.nodeList.push({
            nodeId: this.nodeId,
            nodeType,
            name,
            content: content ? this.removeQuote(content) : undefined,
            parentId,
            sonIdList: [],
        });
        if (parentId) {
            const parent = this.stateGraph.nodeList.find(node => node.nodeId === parentId);
            if (parent) {
                parent.sonIdList.push(this.nodeId);
            }
        }
        this.parentStack.push(this.nodeId);
    }

    // 退出子模块
    exitDeclare(ctx: DeclareContext) {
        this.parentStack.pop();
    }

    // 创建链接
    enterTransfer(ctx: TransferContext) {
        const objects = ctx.object();
        const nameA = objects[0].text;
        const nameB = objects[1].text;
        // console.log(nameA, "===", nameB);
        let nodeA: Node;
        let nodeB: Node;
        const parentId = this.parentStack.length > 0 ? this.parentStack[this.parentStack.length - 1] : undefined;
        // 创建/查询A节点
        if (nameA === "[*]") {
            const node = this.stateGraph.nodeList.find(nod => nod.nodeType === NodeType.START && nod.parentId === parentId);
            if (node) {
                nodeA = node;
            } else {
                this.nodeId++;
                this.stateGraph.nodeList.push({
                    nodeId: this.nodeId,
                    nodeType: NodeType.START,
                    name: "",
                    parentId,
                    sonIdList: [],
                });
                if (parentId) {
                    const parent = this.stateGraph.nodeList.find(node => node.nodeId === parentId);
                    if (parent) {
                        parent.sonIdList.push(this.nodeId);
                    }
                }
                nodeA = this.stateGraph.nodeList[this.stateGraph.nodeList.length - 1];
            }
        } else {
            const name = this.removeQuote(nameA);
            const node = this.stateGraph.nodeList.find(nod => nod.name === name);
            if (node) {
                nodeA = node;
            } else {
                this.nodeId++;
                this.stateGraph.nodeList.push({
                    nodeId: this.nodeId,
                    nodeType: NodeType.COMMON,
                    name: name,
                    parentId,
                    sonIdList: [],
                });
                if (parentId) {
                    const parent = this.stateGraph.nodeList.find(node => node.nodeId === parentId);
                    if (parent) {
                        parent.sonIdList.push(this.nodeId);
                    }
                }
                nodeA = this.stateGraph.nodeList[this.stateGraph.nodeList.length - 1];
            }
        }
        // 创建/查询B节点
        if (nameB === "[*]") {
            const node = this.stateGraph.nodeList.find(nod => nod.nodeType === NodeType.STOP && nod.parentId === parentId);
            if (node) {
                nodeB = node;
            } else {
                this.nodeId++;
                this.stateGraph.nodeList.push({
                    nodeId: this.nodeId,
                    nodeType: NodeType.STOP,
                    name: "",
                    parentId,
                    sonIdList: [],
                });
                if (parentId) {
                    const parent = this.stateGraph.nodeList.find(node => node.nodeId === parentId);
                    if (parent) {
                        parent.sonIdList.push(this.nodeId);
                    }
                }
                nodeB = this.stateGraph.nodeList[this.stateGraph.nodeList.length - 1];
            }
        } else {
            const name = this.removeQuote(nameB);
            const node = this.stateGraph.nodeList.find(nod => nod.name === name);
            if (node) {
                nodeB = node;
            } else {
                this.nodeId++;
                this.stateGraph.nodeList.push({
                    nodeId: this.nodeId,
                    nodeType: NodeType.COMMON,
                    name: name,
                    parentId,
                    sonIdList: [],
                });
                if (parentId) {
                    const parent = this.stateGraph.nodeList.find(node => node.nodeId === parentId);
                    if (parent) {
                        parent.sonIdList.push(this.nodeId);
                    }
                }
                nodeB = this.stateGraph.nodeList[this.stateGraph.nodeList.length - 1];
            }
        }

        this.linkId++;
        this.stateGraph.linkList.push({
            linkId: this.linkId,
            fromId: nodeA.nodeId,
            toId: nodeB.nodeId,
            content: this.removeQuote(ctx.STRING().toString()),
        });
    }

    // 去除双引号
    removeQuote(content: string){
        if (content.length >= 2 && ((content[0] === '\"' && content[content.length - 1] === '\"') || (content[0] === '\'' && content[content.length - 1] === '\''))) {
            return content.substring(1, content.length - 1);
        }
        return content;
    }
}