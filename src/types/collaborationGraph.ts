import { Point } from "./point";

// 通信图的描述储存结构
export type CollaborationGraph = {
    objectList: Object[]; // 对象列表
    linkList: Link[]; // 链列表
};

// 对象结构
export type Object = {
    // 语法分析
    objectId: number; // 对象 id
    name: string; // 对象名称
    tag: string // 对象标记

    // 布局
    position?: Point;
    width?: number;
    height?: number;
};

// 链结构
export type Link = {
    // 语法分析
    linkId: number; // 链 id
    objAId: number; // 对象 A id
    objBId: number; // 对象 B id
    contentA: string; // A 到 B 的消息文本
    contentB: string; // B 到 A 的消息文本

    // 布局
    beginP?: Point;
    endP?: Point;
};

