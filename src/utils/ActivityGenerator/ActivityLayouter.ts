import { ActivityGraph, CurveType, NodeType } from "@/types/activityGraph";

const lineInterval = 100;
const leftMargin = 100;
const nodeHeight = 50;
const circleHeight = 40;
const altHeight = 40;
const barHeight = 6;

export function ActivityLayout(ctx: CanvasRenderingContext2D, activityGraph: ActivityGraph){
    ctx.font = "14px serif";
    console.log(activityGraph);
    let noSwim = true;
    let allSwim = true;
    let maxLineId = 0;
    let leftBorder = 0;
    let rightBorder = 0;
    let barWidth = 0;
    const maxSwimId = activityGraph.swimlaneList.length;
    const swimWidth: number[] = [];
    // 预处理节点信息
    for (const node of activityGraph.nodeList) {
        if (node.swimlaneId === 0) {
            allSwim = false;
        } else {
            noSwim = false;
        }
        maxLineId = Math.max(maxLineId, node.lineId);
        node.width = ctx.measureText(node.content ?? '').width + 100;
        if (node.nodeType === NodeType.BAR) {
            node.width = Math.max(node.next.length * 150, barWidth);
            if (barWidth < node.width) {
                barWidth = node.width;
            }
        }
    }
    if ((!allSwim && !noSwim) || (allSwim && noSwim)) {
        console.log('Swim Error');
    }
    swimWidth.push(0);
    for (const swim of activityGraph.swimlaneList) {
        swimWidth.push(0);
    }
    // 计算每个泳道宽度，以及各个同行节点之间不重合的偏移量
    for(let id = 1; id <= maxLineId; id++) {
        const lineNodeList = [];
        for (const node of activityGraph.nodeList) {
            if (node.lineId === id) {
                lineNodeList.push(node);
            }
        }
        for (let swimId = 0; swimId <= maxSwimId; swimId++) {
            let width = 0;
            let back = false;
            const nodeList = [];
            for (const node of lineNodeList) {
                if (node.swimlaneId === swimId) {
                    width += (node.width ?? 0) + 40;
                    if (node.back !== undefined) {
                        back = true;
                    }
                    nodeList.push(node);
                }
            }
            if (nodeList.length > 0) {
                swimWidth[swimId] = Math.max(swimWidth[swimId], width + (back ? 150 : 0));
                let offset = -width / 2;
                for (const node of nodeList) {
                    node.offSet = offset + ((node.width ?? 0) + 40) / 2;
                    offset += node.width ?? 0;
                }
            }
        }
    }
    // 赋值泳道的位置
    let swimSum = leftMargin;
    for (const swimlane of activityGraph.swimlaneList) {
        swimlane.leftBorder = swimSum;
        swimlane.rightBorder = swimlane.leftBorder + swimWidth[swimlane.swimlaneId];
        swimSum += swimWidth[swimlane.swimlaneId];
        swimlane.height = (maxLineId + 1) * lineInterval;
    }
    // 赋值各个节点的位置信息
    if (noSwim) {
        leftBorder = leftMargin;
        rightBorder = leftMargin + swimWidth[0];
        const center = (leftBorder + rightBorder) / 2;
        for (const node of activityGraph.nodeList) {
            let height = nodeHeight;
            if (node.nodeType === NodeType.ALT) {
                height = altHeight;
            }
            if (node.nodeType === NodeType.START || node.nodeType === NodeType.STOP || node.nodeType === NodeType.END || node.nodeType === NodeType.GATHER){
                height = circleHeight;
            }
            if (node.nodeType === NodeType.BAR) {
                height = barHeight;
            }
            node.position = {x: center + (node.offSet ?? 0), y: node.lineId * lineInterval};
            node.borders = [
                {x: node.position.x, y: node.position.y - height / 2},
                {x: node.position.x + ((node.width ?? 0) - 60) / 2, y: node.position.y},
                {x: node.position.x, y: node.position.y + height / 2},
                {x: node.position.x - ((node.width ?? 0) - 60) / 2, y: node.position.y},
            ];
        }
    } else {
        for (const node of activityGraph.nodeList) {
            let height = nodeHeight;
            if (node.nodeType === NodeType.ALT) {
                height = altHeight;
            }
            if (node.nodeType === NodeType.START || node.nodeType === NodeType.STOP || node.nodeType === NodeType.END || node.nodeType === NodeType.GATHER){
                height = circleHeight;
            }
            if (node.nodeType === NodeType.BAR) {
                height = barHeight;
            }
            const swimlane = activityGraph.swimlaneList[node.swimlaneId - 1];
            const center = ((swimlane.leftBorder ?? 0) + (swimlane.rightBorder ?? 0)) / 2;
            node.position = {x: center + (node.offSet ?? 0), y: node.lineId * lineInterval};
            node.borders = [
                {x: node.position.x, y: node.position.y - height / 2},
                {x: node.position.x + ((node.width ?? 0) - 60) / 2, y: node.position.y},
                {x: node.position.x, y: node.position.y + height / 2},
                {x: node.position.x - ((node.width ?? 0) - 60) / 2, y: node.position.y},
            ];
        }
    }

    // 赋值各个箭头的位置信息
    for (const node of activityGraph.nodeList) {        
        let i = 0;
        for (const edge of node.next) {
            i++;
            const toNode = activityGraph.nodeList.find(node => node.nodeId === edge.toId);
            if (toNode) {
                if (node.lineId === toNode.lineId){
                    edge.beginP = {x: node.borders?.[1].x ?? 0, y: node.borders?.[1].y ?? 0};
                    edge.endP = {x: toNode.borders?.[3].x ?? 0, y: toNode.borders?.[3].y ?? 0};
                    console.log('====');
                    console.log(node);
                    console.log(toNode);
                    edge.curveType = CurveType.DIRECT;
                    continue;
                }
                if (node.nodeType === NodeType.COMMON || node.nodeType === NodeType.GATHER || node.nodeType === NodeType.START) {
                    edge.beginP = {x: node.borders?.[2].x ?? 0, y: node.borders?.[2].y ?? 0};
                    edge.curveType = CurveType.DIRECT;
                }
                if (node.nodeType === NodeType.BAR) {
                    edge.beginP = {x: toNode.borders?.[0].x ?? 0, y: node.borders?.[2].y ?? 0};
                    edge.curveType = CurveType.DIRECT;
                }
                if (node.nodeType === NodeType.ALT) {
                    if (i === 1) {
                        edge.beginP = {x: node.borders?.[2].x ?? 0, y: node.borders?.[2].y ?? 0};
                        edge.curveType = CurveType.DIRECT;
                    } else {
                        edge.beginP = {x: node.borders?.[1].x ?? 0, y: node.borders?.[1].y ?? 0};
                        edge.curveType = CurveType.UP;
                    }
                }
                if (toNode.nodeType === NodeType.BAR) {
                    edge.endP = {x: node.borders?.[2].x ?? 0, y: toNode.borders?.[0].y ?? 0};
                } else {
                    edge.endP = {x: toNode.borders?.[0].x ?? 0, y: toNode.borders?.[0].y ?? 0};
                }
            }
        }
        if (node.back !== undefined) {
            const backNode = activityGraph.nodeList.find(nod => nod.nodeId === node.back?.toId);
            if (backNode !== undefined) {
                node.back.beginP = {x: node.borders?.[1].x ?? 0, y: node.borders?.[1].y ?? 0};
                node.back.endP = {x: backNode.borders?.[1].x ?? 0, y: backNode.borders?.[1].y ?? 0};
                node.back.curveType = CurveType.BACK;
            }
        }
    }

    return activityGraph;
}
