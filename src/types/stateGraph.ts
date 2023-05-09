import { Point } from "./point";

// 通信图的描述储存结构
export type StateGraph = {
    nodeList: Node[];
    linkList: Link[];
}

export enum NodeType {
    COMMON,
    CHOICE,
    START,
    STOP,
}

// 节点
export type Node = {
    nodeId: number;
    nodeType: NodeType;
    name: string;
    content?: string;
    parentId?: number;
    sonIdList: number[];

    // 布局
    position?: Point; // 中心坐标
    width?: number;
    height?: number;
    used?: boolean[]; // 已经连过边的方向（上右下左）
}

// 链接
export type Link = {
    linkId: number;
    fromId: number;
    toId: number;
    content: string;

    // 布局
    beginP?: Point;
    endP?: Point;
}