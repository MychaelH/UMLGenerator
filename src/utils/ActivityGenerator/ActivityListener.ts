import { ActivityGraph, NodeType } from "@/types/activityGraph";
import { ActivityGrammarListener } from "./ActivityGrammarUtil/ActivityGrammarListener";
import { AltContext, ElseBlockContext, ElseContext, ElseifContext, ForkBlockContext, ForkContext, NodeContext, RepeatContext, SwimlanesContext } from "./ActivityGrammarUtil/ActivityGrammarParser";

export class ActivityListener implements ActivityGrammarListener {
    activityGraph: ActivityGraph;
    nodeId: number;
    swimlaneId: number;
    swimlaneIdNow: number;

    lastNodeId: number; // 上一个节点的 id
    lastNodeContent: string; // 上一个节点的箭头文本

    elseFirstAltNodeIdStack: number[]; // 分支结构第一个节点 id 栈
    lastElseNodeIdStack: number[]; // 上一个分支节点的 id 栈
    elseLastNodeIdStack: number[]; // 每个分支最后一个节点的 id 栈

    repeatNodeIdStack: number[]; // 循环结构节点 id 栈

    forkNodeIdStack: number[]; // 并行结构节点 id 栈
    forkLastNodeIdStack: number[]; // 并行结构最后一个节点 id 栈

    error: boolean; // 是否报错
    errorContent?: string; // 报错内容

    constructor() {
        this.activityGraph = {nodeList: [], swimlaneList: []};
        this.nodeId = 0;
        this.swimlaneId = 0;
        this.swimlaneIdNow = 0;
        this.lastNodeId = 0;
        this.lastNodeContent = "";
        this.elseFirstAltNodeIdStack = [];
        this.lastElseNodeIdStack = [];
        this.elseLastNodeIdStack = [];
        this.repeatNodeIdStack = [];
        this.forkNodeIdStack = [];
        this.forkLastNodeIdStack = [];
        this.error = false;
    }

    // 创建节点
    enterNode(ctx: NodeContext) {
        const string = ctx.STRING();
        const nodeId = ++this.nodeId;
        let lineId = 0;
        // 将上一个节点与当前节点连接
        if (this.lastNodeId > 0) {
            const lastNodeId = this.lastNodeId;
            const lastContent = this.lastNodeContent;
            const node = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            node?.next.push({fromId: node.nodeId, toId: nodeId, content: lastContent})
            if (node?.lineId ?? 0 > lineId) {
                lineId = node?.lineId ?? 0
            }
        }
        lineId++;
        if (string) {
            this.activityGraph.nodeList.push({
                nodeId: nodeId,
                lineId,
                nodeType: NodeType.COMMON,
                content: this.removeQuote(string.toString()),
                next: [],
                swimlaneId: this.swimlaneIdNow,
            });
        } else {
            const name = ctx.text;
            if (name === 'start') {
                this.activityGraph.nodeList.push({
                    nodeId: nodeId,
                    lineId,
                    nodeType: NodeType.START,
                    next: [],
                    swimlaneId: this.swimlaneIdNow,
                });
            } else if (name === 'end') {
                this.activityGraph.nodeList.push({
                    nodeId: nodeId,
                    lineId,
                    nodeType: NodeType.END,
                    next: [],
                    swimlaneId: this.swimlaneIdNow,
                });
            } else if (name === 'stop') {
                this.activityGraph.nodeList.push({
                    nodeId: nodeId,
                    lineId,
                    nodeType: NodeType.STOP,
                    next: [],
                    swimlaneId: this.swimlaneIdNow,
                });
            } else {
                this.error = true;
                this.errorContent = "未知节点";
            }
        }
        
        this.lastNodeId = nodeId;
        this.lastNodeContent = "";
    }

    // 创建分支结构
    enterAlt(ctx: AltContext) {
        const strings = ctx.STRING();
        const altNodeId = ++this.nodeId;
        let lineId = 0;
        // 将上一个节点与当前节点连接
        if (this.lastNodeId > 0) {
            const lastNodeId = this.lastNodeId;
            const lastContent = this.lastNodeContent;
            const node = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            node?.next.push({fromId: node.nodeId, toId: altNodeId, content: lastContent});
            if ((node?.lineId ?? 0) > lineId) {
                lineId = node?.lineId ?? 0;
            }
        }
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: altNodeId,
            lineId,
            nodeType: NodeType.ALT,
            content: this.removeQuote(strings[0].toString()),
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        this.elseFirstAltNodeIdStack.push(altNodeId);
        this.lastElseNodeIdStack.push(altNodeId);

        this.lastNodeId = altNodeId;
        this.lastNodeContent = this.removeQuote(strings[1].toString());
    }

    // 创建分支结构中间选择节点
    enterElseif(ctx: ElseifContext){
        const strings = ctx.STRING();
        const altNodeId = ++this.nodeId;
        const lastElseNodeId = this.lastElseNodeIdStack[this.lastElseNodeIdStack.length - 1];
        const lastElseNode = this.activityGraph.nodeList.find(node => node.nodeId === lastElseNodeId);
        const lineId = lastElseNode?.lineId ?? 0;
        lastElseNode?.next.push({fromId: lastElseNodeId, toId: altNodeId, content: "no"});
        this.activityGraph.nodeList.push({
            nodeId: altNodeId,
            lineId,
            nodeType: NodeType.ALT,
            content: this.removeQuote(strings[0].toString()),
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        this.lastElseNodeIdStack.push(altNodeId);

        this.lastNodeId = altNodeId;
        this.lastNodeContent = this.removeQuote(strings[1].toString());
    }

    // 创建分支结构否则部分
    enterElse(ctx: ElseContext){
        const lastElseNodeId = this.lastElseNodeIdStack[this.lastElseNodeIdStack.length - 1];
        this.lastElseNodeIdStack.push(0);
        this.lastNodeId = lastElseNodeId;
        this.lastNodeContent = this.removeQuote(ctx.STRING().toString());
    }

    // 退出分支结构代码块时的记录
    exitElseBlock(ctx: ElseBlockContext) {
        this.elseLastNodeIdStack.push(this.lastNodeId);
    }

    // 退出分支结构时，将所有节点汇合
    exitAlt(ctx: AltContext) {
        const nodeId = ++this.nodeId;
        const lastNodeIdList = [];
        let lineId = 0;
        while (this.lastElseNodeIdStack[this.lastElseNodeIdStack.length - 1] !== this.elseFirstAltNodeIdStack[this.elseFirstAltNodeIdStack.length - 1]) {
            const lastNodeId = this.elseLastNodeIdStack[this.elseLastNodeIdStack.length - 1];
            const lastNode = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            if (lastNode && lastNode?.lineId > lineId) {
                lineId = lastNode?.lineId;
            }
            lastNodeIdList.push(lastNodeId);
            this.lastElseNodeIdStack.pop();
            this.elseLastNodeIdStack.pop();
        }
        const lastNodeId = this.elseLastNodeIdStack[this.elseLastNodeIdStack.length - 1];
        const lastNode = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
        if (lastNode && lastNode?.lineId > lineId) {
            lineId = lastNode?.lineId;
        }
        console.log(lastNodeIdList);
        lastNodeIdList.push(lastNodeId);
        this.lastElseNodeIdStack.pop();
        this.elseLastNodeIdStack.pop();
        this.elseFirstAltNodeIdStack.pop();
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: nodeId,
            lineId,
            nodeType: NodeType.GATHER,
            content: "",
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        for (const lastNodeId of lastNodeIdList) {
            const lastNode = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            if (lastNode) {
                lastNode.next.push({fromId: lastNodeId, toId: nodeId, content: ""});
            }
        }
        this.lastNodeId = nodeId;
        this.lastNodeContent = "";
    }

    enterRepeat(ctx: RepeatContext) {
        const nodeId = ++this.nodeId;
        let lineId = 0;
        // 将上一个节点与当前节点连接
        if (this.lastNodeId > 0) {
            const lastNodeId = this.lastNodeId;
            const lastContent = this.lastNodeContent;
            const node = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            node?.next.push({fromId: node.nodeId, toId: nodeId, content: lastContent})
            if (node?.lineId ?? 0 > lineId) {
                lineId = node?.lineId ?? 0
            }
        }
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: nodeId,
            lineId,
            nodeType: NodeType.GATHER,
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        this.lastNodeId = nodeId;
        this.lastNodeContent = "";
        this.repeatNodeIdStack.push(nodeId);
    }

    exitRepeat(ctx: RepeatContext) {
        const content = this.removeQuote(ctx.STRING().toString());
        const nodeId = ++this.nodeId;
        let lineId = 0;
        // 将上一个节点与当前节点连接
        if (this.lastNodeId > 0) {
            const lastNodeId = this.lastNodeId;
            const lastContent = this.lastNodeContent;
            const node = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            node?.next.push({fromId: node.nodeId, toId: nodeId, content: lastContent})
            if (node?.lineId ?? 0 > lineId) {
                lineId = node?.lineId ?? 0
            }
        }
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: nodeId,
            lineId,
            nodeType: NodeType.ALT,
            content: content,
            next: [],
            back: {fromId: nodeId, toId: this.repeatNodeIdStack[this.repeatNodeIdStack.length - 1], content: "yes"},
            swimlaneId: this.swimlaneIdNow,
        });
        this.repeatNodeIdStack.pop();
        this.lastNodeId = nodeId;
        this.lastNodeContent = "no";
    }

    // 进入并行结构
    enterFork(ctx: ForkContext) {
        const nodeId = ++this.nodeId;
        let lineId = 0;
        // 将上一个节点与当前节点连接
        if (this.lastNodeId > 0) {
            const lastNodeId = this.lastNodeId;
            const lastContent = this.lastNodeContent;
            const node = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            node?.next.push({fromId: node.nodeId, toId: nodeId, content: lastContent})
            if (node?.lineId ?? 0 > lineId) {
                lineId = node?.lineId ?? 0
            }
        }
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: nodeId,
            lineId,
            nodeType: NodeType.BAR,
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        this.lastNodeId = nodeId;
        this.lastNodeContent = "";
        this.forkNodeIdStack.push(nodeId);
        this.forkLastNodeIdStack.push(nodeId);
    }

    // 进入并行代码块
    enterForkBlock(ctx: ForkBlockContext) {
        this.lastNodeId = this.forkNodeIdStack[this.forkNodeIdStack.length - 1];
        this.lastNodeContent = "";
    }

    // 退出并行代码块
    exitForkBlock(ctx: ForkBlockContext) {
        this.forkLastNodeIdStack.push(this.lastNodeId);
    }

    // 退出并行结构
    exitFork(ctx: ForkContext) {
        const nodeId = ++this.nodeId;
        const lastNodeIdList = [];
        let lineId = 0;
        while (this.forkLastNodeIdStack[this.forkLastNodeIdStack.length - 1] != this.forkNodeIdStack[this.forkNodeIdStack.length - 1]) {
            const lastNodeId = this.forkLastNodeIdStack[this.forkLastNodeIdStack.length - 1];
            const lastNode = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            if (lastNode && lastNode?.lineId > lineId) {
                lineId = lastNode?.lineId;
            }
            lastNodeIdList.push(lastNodeId);
            this.forkLastNodeIdStack.pop();
            
        }
        this.forkLastNodeIdStack.pop();
        lineId++;
        this.activityGraph.nodeList.push({
            nodeId: nodeId,
            lineId,
            nodeType: NodeType.BAR,
            content: "",
            next: [],
            swimlaneId: this.swimlaneIdNow,
        });
        for (const lastNodeId of lastNodeIdList) {
            const lastNode = this.activityGraph.nodeList.find(node => node.nodeId === lastNodeId);
            lastNode?.next.push({fromId: lastNodeId, toId: nodeId, content: ""});
        }
        this.lastNodeId = nodeId;
        this.lastNodeContent = "";
        this.forkNodeIdStack.pop();
    }

    // 更换泳道
    enterSwimlanes(ctx: SwimlanesContext) {
        const name = this.removeQuote(ctx.IDENT().toString());
        let swimlaneId = 0;
        for (const swimlane of this.activityGraph.swimlaneList) {
            if (swimlane.name === name) {
                swimlaneId = swimlane.swimlaneId;
                break;
            }
        }
        if (!swimlaneId){
            swimlaneId = ++this.swimlaneId;
            this.activityGraph.swimlaneList.push({
                swimlaneId: swimlaneId,
                name: name,
            });
        }
        this.swimlaneIdNow = swimlaneId;
    }
    
    // 去除双引号
    removeQuote(content: string){
        if (content.length >= 2 && ((content[0] === '\"' && content[content.length - 1] === '\"') || (content[0] === '|' && content[content.length - 1] === '|'))) {
            return content.substring(1, content.length - 1);
        }
        return content;
    }
}
