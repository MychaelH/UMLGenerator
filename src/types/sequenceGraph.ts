import { Point } from "./point";

// 顺序图的描述储存结构
export type SequenceGraph = {
    participantList: Participant[]; // 参与者列表
    messageList: Message[]; // 消息列表
    fragmentList: Fragment[]; // 片段列表
    maxLineId: number; // 最大的 y 坐标
};



// 参与者结构
export type Participant = {
    // 语法分析
    participantId: number; // 参与者 id
    type: ParticipantType; // 参与者类型
    name: string; // 参与者名称
    activatedSegmentList: ActivatedSegment[]; // 激活区间列表
    createSpot?: number; // 创建时间点（为 0/undefined 则初始存在）
    endSpot?: number; // 销毁时间点（为 0/undefined 则延伸到最低）

    // 布局
    beginPoint?: Point;
    endPoint?: Point;
};

// 参与者类型
export enum ParticipantType {
    CUSTOM, // 自定义参与者
    ACTOR, // 角色
    BOUNDARY, // 边界
    CONTROL, // 控制
    DATABASE, // 数据库
    ENTITY, // 实体
    COLLECTIONS, // 集合
    QUEUE, // 队列
    INPUT, // 外部输入
    OUTPUT, // 输出外部
};

// 激活区间
export type ActivatedSegment = {
    beginSpot: number; // 激活时间点
    endSpot: number; // 结束时间点
    level: number; // 激活的层级（0 为第一层）

    // 布局
    beginPoint?: Point;
    endPoint?: Point;
}



// 箭头消息
export type Message = {
    // 语法分析
    msgId: number; // 消息 id，与行 id 相同
    content?: string; // 消息文本
    fromParticipantId: number; // 发送者
    toParticipantId: number; // 接收者
    arrowType: ArrowType; // 箭头类型

    // 布局
    beginPoint?: Point;
    endPoint?: Point;
};

// 箭头类型
export enum ArrowType {
    REQUEST, // 调用箭头（实心箭头）
    RESPONSE, // 返回箭头（虚线箭头）
    MESSAGE, // 消息箭头（空心箭头）
    SYNCHRONOUS, // 同步消息
    ASYNCHRONOUS, // 异步消息
};



// 片段结构
export type Fragment = {
    // 语法分析
    fragmentId: number; // 片段 id
    type: FragmentType; // 片段类型
    description: string; // 片段描述
    subFragmentIdList: number[]; // 子片段 id 列表
    beginParticipantId?: number; //片段包含的最左参与者 id
    endParticipantId?: number; //片段包含的最右参与者 id
    beginLineId?: number; // 片段开头所在行 id
    endLineId?: number; // 片段结尾所在行 id
    dividerList?: FragmentDivider[]; // 分割线列表（条件片段类型可用）

    // 布局
    topY?: number;
    bottomY?: number;
    leftX?: number;
    rightX?: number;
};

// 分割线
export type FragmentDivider = {
    lineId: number; // 分割线所在行 id
    content?: string; // 分割线描述文本

    // 布局
    y?: number;
};

// 片段类型
export enum FragmentType {
    OPT, // 可选片段
    LOOP, // 循环片段
    PAR, // 并行片段
    ALT, // 条件片段
    REF, // 交互片段
};
