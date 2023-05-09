import { Fragment, SequenceGraph } from "@/types/sequenceGraph";

const disX = 200; // x 坐标间隔
const disY = 60; // y 坐标间隔
const disYHead = 100; // y 坐标头部预留空间
const segmentOffset = 6; // 激活片段重叠偏移量
const fragOffset = 10; // 片段左右偏移量

const backLength = 60; // 箭头折返距离
const activateWidth = 12; // 激活区间宽度

export function SequenceLayout(ctx: CanvasRenderingContext2D, sequenceGraph: SequenceGraph){
    ctx.font = "14px serif";

    // 预计算间距
    let position = [0]; // 每个参与者的 x 坐标
    let leftContent = [[] as number[]]; // 每个参与者生命线每个时刻左侧占用的空间
    let rightContent = [[] as number[]]; // 每个参与者生命线每个时刻右侧占用的空间
    let leftFragWidth = [[] as number[]]; // 每个参与者生命线每个时刻左侧 fragment 片段占用的空间
    let rightFragWidth = [[] as number[]]; // 每个参与者生命线每个时刻右侧 fragment 片段占用的空间
    let leftSeg = [[] as number[]]; // 每个参与者生命线每个时刻激活片段左侧占用的空间
    let rightSeg = [[] as number[]]; // 每个参与者生命线每个时刻激活片段右侧占用的空间
    let distance = [new Map<number, number>()]; // 每个生命线与之前各个生命线的最小距离

    for (let i = 0; i < sequenceGraph.participantList.length; i++) {
        const participant = sequenceGraph.participantList[i];
        const id = participant.participantId;
        if (id !== i + 1) {
            console.log("id 序列错误");
        }
        distance.push(new Map<number, number>());
        leftContent.push([] as number[]);
        rightContent.push([] as number[]);
        leftFragWidth.push([] as number[]);
        rightFragWidth.push([] as number[]);
        leftSeg.push([] as number[]);
        rightSeg.push([] as number[]);
        for (let j = 0; j <= sequenceGraph.maxLineId; j++){
            leftContent[id].push(0);
            rightContent[id].push(0);
            leftFragWidth[id].push(0);
            rightFragWidth[id].push(0);
            leftSeg[id].push(0);
            rightSeg[id].push(0);
        }

        // 检查每一个指向自己的消息
        for (const msg of sequenceGraph.messageList) {
            if (msg.fromParticipantId === id && msg.fromParticipantId === msg.toParticipantId) {
                const length = Math.max(ctx.measureText(msg.content ?? '').width + backLength / 2 + 10, backLength);
                if (length > rightContent[id][msg.msgId]) {
                    rightContent[id][msg.msgId] = length;
                }
            }
        }

        // 计算所有激活区间的宽度
        if (participant.activatedSegmentList) {
            for (const segment of participant.activatedSegmentList) {
                for (let t = segment.beginSpot; t <= segment.endSpot; t++) {
                    rightContent[id][t] = Math.max(rightContent[id][t], activateWidth / 2 + (segment.level - 1) * segmentOffset);
                    leftContent[id][t] = Math.max(leftContent[id][t], activateWidth / 2);
                    rightSeg[id][t] = Math.max(rightSeg[id][t], activateWidth / 2 + (segment.level - 1) * segmentOffset);
                    leftSeg[id][t] = Math.max(leftSeg[id][t], activateWidth / 2);
                }
            }
        }

        // 角色名字和图形占用的宽度
        const identLength = ctx.measureText(participant.name).width;
        if (participant.createSpot) {
            leftContent[id][participant.createSpot] = Math.max(leftContent[id][participant.createSpot], Math.max(identLength / 2 + 10, 20));
            rightContent[id][participant.createSpot] = Math.max(rightContent[id][participant.createSpot], Math.max(identLength / 2 + 10, 20));
            leftSeg[id][participant.createSpot] = Math.max(leftSeg[id][participant.createSpot], Math.max(identLength / 2 + 10, 20));
            rightSeg[id][participant.createSpot] = Math.max(rightSeg[id][participant.createSpot], Math.max(identLength / 2 + 10, 20));
        } else {
            leftContent[id][0] = Math.max(leftContent[id][0], Math.max(identLength / 2, 20));
            rightContent[id][0] = Math.max(rightContent[id][0], Math.max(identLength / 2, 20));
            leftSeg[id][0] = Math.max(leftSeg[id][0], Math.max(identLength / 2, 20));
            rightSeg[id][0] = Math.max(rightSeg[id][0], Math.max(identLength / 2, 20));
        }
    }

    // 根据消息长度限制生命线间距
    for (const msg of sequenceGraph.messageList) {
        if (msg.fromParticipantId !== msg.toParticipantId) {
            const pid1 = Math.max(msg.fromParticipantId, msg.toParticipantId);
            const pid2 = Math.min(msg.fromParticipantId, msg.toParticipantId);
            const length = ctx.measureText(msg.content ?? '').width + 30;
            const oldLen = distance[pid1].get(pid2);
            if (oldLen === undefined) {
                distance[pid1].set(pid2, length);
            } else if (length > oldLen){
                distance[pid1].set(pid2, length);
            }
        }
    }

    // 根据片段信息长度限制生命线间距
    for (const fragment of sequenceGraph.fragmentList) {
        const basicLength = ctx.measureText('aaaa').width + 40;
        if (fragment.beginParticipantId && fragment.endParticipantId) {
            let pid1 = fragment.endParticipantId;
            let pid2 = fragment.beginParticipantId;
            if (fragment.dividerList) {
                for (const divider of fragment.dividerList) {
                    const length = ctx.measureText(divider.content ?? '').width + basicLength;
                    const oldLen = distance[pid1].get(pid2);
                    if (oldLen === undefined) {
                        distance[pid1].set(pid2, length);
                    } else if (length > oldLen){
                        distance[pid1].set(pid2, length);
                    }
                }
            }
            const length = ctx.measureText(fragment.description).width + basicLength;
            const oldLen = distance[pid1].get(pid2);
            if (oldLen === undefined) {
                distance[pid1].set(pid2, length);
            } else if (length > oldLen){
                distance[pid1].set(pid2, length);
            }
        }
    }

    // 根据片段深度限制生命线间距
    for (const fragment of sequenceGraph.fragmentList) {
        if (fragment.beginParticipantId !== undefined && fragment.endParticipantId !== undefined && fragment.beginLineId !== undefined && fragment.endLineId !== undefined) {
            const leftLaps = FindOverlapFromSubList(sequenceGraph, fragment, true) + 1;
            const rightLaps = FindOverlapFromSubList(sequenceGraph, fragment, false) + 1;
            for (let t = fragment.beginLineId; t <= fragment.endLineId; t++) {
                leftFragWidth[fragment.beginParticipantId][t] = Math.max(leftFragWidth[fragment.beginParticipantId][t], leftLaps * fragOffset);
                rightFragWidth[fragment.endParticipantId][t] = Math.max(rightFragWidth[fragment.endParticipantId][t], rightLaps * fragOffset);
            }
        }
    }



    // 计算每个参与者 x 坐标位置
    for (let i = 0; i < sequenceGraph.participantList.length; i++) {
        const participant = sequenceGraph.participantList[i];
        const id = participant.participantId;
        let maxLen = 0;
        for (let j = 0; j <= sequenceGraph.maxLineId; j++){
            const leftLen = id > 1 ? rightContent[id - 1][j] + rightFragWidth[id - 1][j] + 20 : 200;
            maxLen = Math.max(maxLen, leftLen + leftContent[id][j] + leftFragWidth[id][j]);
        }
        position[id] = position[id - 1] + maxLen;
        for (let j = 1; j < id; j++) {
            const len = distance[id].get(j);
            if (len !== undefined) {
                position[id] = Math.max(position[id], position[j] + len);
            }
        }
    }



    // 确定每个参与者和时间线位置
    for (const participant of sequenceGraph.participantList) {
        const posX = position[participant.participantId];
        participant.beginPoint = {x: posX, y: disYHead};
        if (participant.createSpot) {
            participant.beginPoint.y = participant.createSpot * disY + disYHead;
        }
        participant.endPoint = {
            x: posX,
            y: (participant.endSpot === undefined ? sequenceGraph.maxLineId + 1: participant.endSpot) * disY + disYHead
        };
        if (participant.activatedSegmentList) {
            for (const segment of participant.activatedSegmentList) {
                segment.beginPoint = {
                    x: posX + (segment.level - 1) * segmentOffset,
                    y: segment.beginSpot * disY + disYHead,
                };
                segment.endPoint = {
                    x: posX + (segment.level - 1) * segmentOffset,
                    y: segment.endSpot * disY + disYHead,
                };
            }
        }
    }

    // 确定每个消息位置
    for (const msg of sequenceGraph.messageList) {
        const fromPosX = position[msg.fromParticipantId];
        const toPosX = position[msg.toParticipantId];
        //console.log(msg.msgId, '  ', rightSeg[msg.toParticipantId][msg.msgId]);
        msg.beginPoint = {
            x: fromPosX + (fromPosX <= toPosX ? rightSeg[msg.fromParticipantId][msg.msgId] : -leftSeg[msg.fromParticipantId][msg.msgId]),
            y: msg.msgId * disY + disYHead,
        };
        if (msg.fromParticipantId !== msg.toParticipantId) {
            msg.endPoint = {
                x: toPosX - (fromPosX < toPosX ? leftSeg[msg.toParticipantId][msg.msgId] : -rightSeg[msg.toParticipantId][msg.msgId]),
                y: msg.msgId * disY + disYHead,
            };
        } else {
            msg.endPoint = {
                x: toPosX + rightSeg[msg.toParticipantId][msg.msgId],
                y: (msg.msgId + 0.5) * disY + disYHead,
            };
        }
    }

    // 确定每个片段位置
    for (const fragment of sequenceGraph.fragmentList) {
        if (fragment.dividerList) {
            for (const divider of fragment.dividerList) {
                divider.y = divider.lineId * disY + disYHead;
            }
        }
        if (fragment.beginParticipantId !== undefined && fragment.endParticipantId !== undefined && fragment.beginLineId !== undefined && fragment.endLineId !== undefined) {
            const leftLaps = FindOverlapFromSubList(sequenceGraph, fragment, true);
            const rightLaps = FindOverlapFromSubList(sequenceGraph, fragment, false);
            let leftCap = fragOffset;
            let rightCap = fragOffset;
            for (let t = fragment.beginLineId ?? 0; t <= fragment.endLineId; t++) {
                leftCap = Math.max(leftCap, leftContent[fragment.beginParticipantId][t] + fragOffset);
                rightCap = Math.max(rightCap, rightContent[fragment.endParticipantId][t] + fragOffset);
            }
            fragment.topY = fragment.beginLineId * disY + disYHead;
            fragment.bottomY = fragment.endLineId * disY + disYHead;
            fragment.leftX = position[fragment.beginParticipantId] - fragOffset * leftLaps - leftCap;
            fragment.rightX = position[fragment.endParticipantId] + fragOffset * rightLaps + rightCap;
        }
    }
    return sequenceGraph;
}

// 计算重叠的激活区间数目
function FindOverlapFromSubList(sequenceGraph: SequenceGraph, fragment: Fragment, isLeft: boolean): number {
    let maxDepth = 0;
    for (const subId of fragment.subFragmentIdList) {
        const subFrag = sequenceGraph.fragmentList?.find(v => v.fragmentId === subId);
        if (subFrag) {
            if (isLeft){
                if (subFrag.beginParticipantId === fragment.beginParticipantId){
                    const depth = FindOverlapFromSubList(sequenceGraph, subFrag, isLeft) + 1;
                    if (depth > maxDepth) {
                        maxDepth = depth;
                    }
                }
            } else {
                if (subFrag.endParticipantId === fragment.endParticipantId){
                    const depth = FindOverlapFromSubList(sequenceGraph, subFrag, isLeft) + 1;
                    if (depth > maxDepth) {
                        maxDepth = depth;
                    }
                }
            }
        }
    }
    return maxDepth;
}
