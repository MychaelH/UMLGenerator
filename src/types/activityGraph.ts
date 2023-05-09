import { Point } from "./point";

export type ActivityGraph = {
    nodeList: Node[]; // 节点列表
    swimlaneList: Swimlane[]; // 泳道列表
};

export enum NodeType {
    COMMON, // 普通节点
    ALT, // 分支节点
    GATHER, // 汇合节点
    BAR, // 汇合条
    START, // 开始节点
    STOP, // 终止节点
    END, // 结束节点
}

// 线条类型
export enum CurveType {
    DIRECT, // 直线型
    UP, // 上拐型
    DOWN, // 下拐型
    BACK, // 折返型
}

// 节点
export type Node = {
    // 语法分析
    nodeId: number; // 节点 id
    lineId: number; // 行 id
    nodeType: NodeType; // 节点类型
    content?: string; // 节点文本
    next: Edge[]; // 下一个节点连边列表
    back?: Edge; // 回溯边
    swimlaneId: number; // 所属泳道 id

    // 布局
    width?: number;
    offSet?: number; // 节点绘制时相对泳道中心的偏移量
    position?: Point; // 中心坐标
    borders?: Point[]; // 上右下左边界坐标
}

// 箭头
export type Edge = {
    fromId: number;
    toId: number;
    content?: string;

    // 布局
    beginP?: Point;
    endP?: Point;
    curveType?: CurveType;
}

// 泳道
export type Swimlane = {
    swimlaneId: number;
    name: string;

    // 布局
    leftBorder?: number;
    rightBorder?: number;
    height?: number;
}