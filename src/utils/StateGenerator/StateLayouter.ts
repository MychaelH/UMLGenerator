import { Point, Segment, isRecCrossRec, isSegmentCrossRec, pDistance, pModule } from "@/types/point";
import { StateGraph, Node, NodeType } from "@/types/stateGraph";

const minWidth = 100;
const minHeight = 70;
const INF = 10000000;
const cap = 100;
const deltaX = [0, 1, 0, -1];
const deltaY = [-1, 0, 1, 0];

export function StateLayout(ctx: CanvasRenderingContext2D, stateGraph: StateGraph){
    ctx.font = "14px serif";
    let pointList: Point[] = [];
    let bestScore = INF * INF;

    // 获取两个节点之间的最短边
    const getLinkOfNode = (nodeA: Node, nodeB: Node) => {
        let minDis = INF;
        let link: Segment = {a: {x: 0, y:0}, b: {x: 0, y:0}};
        let usedI = 0;
        let usedJ = 0;
        const widthA = nodeA.width ?? 0;
        const heightA = nodeA.height ?? 0;
        const widthB = nodeB.width ?? 0;
        const heightB = nodeB.height ?? 0;
        if (nodeA.position && nodeB.position){
            for (let i = 0; i < 4; i++) {
                if (nodeA.used && nodeA.used[i] && !(nodeA.used[0] && nodeA.used[1] && nodeA.used[2] && nodeA.used[3])) {
                    continue;
                }
                const pA = {x: nodeA.position.x + widthA / 2 * deltaX[i], y: nodeA.position.y + heightA / 2 * deltaY[i]};
                for (let j = 0; j < 4; j++) {
                    if (nodeB.used && nodeB.used[i] && !(nodeB.used[0] && nodeB.used[1] && nodeB.used[2] && nodeB.used[3])) {
                        continue;
                    }
                    const pB = {x: nodeB.position.x + widthB / 2 * deltaX[j], y: nodeB.position.y + heightB / 2 * deltaY[j]};
                    const dis = pDistance(pA, pB);
                    if (dis < minDis){
                        minDis = dis;
                        link = {a: pA, b: pB};
                        usedI = i;
                        usedJ = j;
                    }
                }
            }
        }
        if (nodeA.used){
            nodeA.used[usedI] = true;
        }
        if (nodeB.used){
            nodeB.used[usedJ] = true;
        }
        return link;
    };

    // 计算布局得分
    const getScore = (nodeList: Node[], len: number) => {
        let score = 0;
        // 禁止节点相交
        for (let i = 0; i < len; i++) {
            const node1 = nodeList[i];
            node1.used = [false, false, false, false];
            for (let j = i + 1; j < len; j++) {
                const node2 = nodeList[j];
                if (isRecCrossRec(node1.position ?? {x:0, y:0}, node1.width ?? 0, node1.height ?? 0, node2.position ?? {x:0, y:0}, node2.width ?? 0, node2.height ?? 0)) {
                    return INF * INF;
                }
            }
        }

        // 起始节点在上
        for (let i = 0; i < len; i++) {
            const node = nodeList[i];
            if (node.nodeType === NodeType.START && node.position) {
                for (let j = 0; j < len; j++) {
                    const node2 = nodeList[j];
                    if (node2.nodeType !== NodeType.START && node2.position && node2.position.y <= node.position.y) {
                        score += INF;
                    }
                }
            }
            if (node.nodeType === NodeType.STOP && node.position) {
                for (let j = 0; j < len; j++) {
                    const node2 = nodeList[j];
                    if (node2.nodeType !== NodeType.STOP && node2.position && node2.position.y >= node.position.y) {
                        score += INF;
                    }
                }
            }
        }

        // 长宽尽量接近
        let minX = INF;
        let maxX = -INF;
        let minY = INF;
        let maxY = -INF;
        for (let i = 0; i < len; i++) {
            const node = nodeList[i];
            if(node.position && node.width && node.height) {
                minX = Math.min(minX, node.position.x - node.width / 2);
                maxX = Math.max(maxX, node.position.x + node.width / 2);
                minY = Math.min(minY, node.position.y - node.height / 2);
                maxY = Math.max(maxY, node.position.y + node.height / 2);
            }
        }
        score -= (maxX - minX) * (maxY - minY);

        // 检查边
        for (const link of stateGraph.linkList) {
            let node1: Node | undefined = undefined;
            let node2: Node | undefined = undefined;
            for (let i = 0; i < len; i++) {
                const node = nodeList[i];
                if (node.nodeId === link.fromId) {
                    node1 = node;
                }
                if (node.nodeId === link.toId) {
                    node2 = node;
                }
            }
            if (node1 && node2) {
                const segment = getLinkOfNode(node1, node2);
                score += pDistance(segment.a, segment.b) * 10000;
                for (let i = 0; i < len; i++) {
                    const node = nodeList[i];
                    if (isSegmentCrossRec(segment, node.position ?? {x: 0, y: 0}, node.width ?? 0, node.height ?? 0)) {
                        score += INF;
                    }
                }
            }
        }

        return score;
    };

    // 递归搜索最佳布局
    const search = (nodeList: Node[], cur: number) => {
        if (cur >= nodeList.length) {
            const score = getScore(nodeList, nodeList.length);
            if (score < bestScore) {
                bestScore = score;
                pointList = [];
                for (let i = 0; i < nodeList.length; i++) {
                    pointList.push({x: nodeList[i].position?.x ?? 0, y: nodeList[i].position?.y ?? 0});
                }
            }
            return;
        }
        const node = nodeList[cur];
        if (cur === 0) {
            node.position = {x: 0, y: 0};
            search(nodeList, cur + 1);
        } else {
            for (let i = 0; i < cur; i++) {
                const rNode = nodeList[i];
                let score = 0;
                if (rNode.position && rNode.height && node.height && rNode. width && node.width){
                    // 下
                    node.position = {x: rNode.position.x, y: rNode.position.y + rNode.height / 2 + cap + node.height / 2};
                    score = getScore(nodeList, cur + 1);
                    if (score < bestScore) {
                        search(nodeList, cur + 1);
                    }

                    // 右
                    node.position = {x: rNode.position.x + rNode.width / 2 + cap + node.width / 2, y: rNode.position.y};
                    score = getScore(nodeList, cur + 1);
                    if (score < bestScore) {
                        search(nodeList, cur + 1);
                    }

                    // 左
                    node.position = {x: rNode.position.x - rNode.width / 2 - cap - node.width / 2, y: rNode.position.y};
                    score = getScore(nodeList, cur + 1);
                    if (score < bestScore) {
                        search(nodeList, cur + 1);
                    }

                    // 上
                    node.position = {x: rNode.position.x, y: rNode.position.y - rNode.height / 2 - cap - node.height / 2};
                    score = getScore(nodeList, cur + 1);
                    if (score < bestScore) {
                        search(nodeList, cur + 1);
                    }
                }
            }
        }
    };

    const calculateLayoutOfNodes = (nodeList: Node[]) => {
        // 确定节点尺寸
        for (const node of nodeList) {
            const nameWidth = ctx.measureText(node.name).width + 20;
            if (node.sonIdList.length > 0) {
                const sonList: Node[] = [];
                for (const sonId of node.sonIdList) {
                    const son = stateGraph.nodeList.find(nod => nod.nodeId === sonId);
                    if (son) {
                        sonList.push(son);
                    }
                }
                calculateLayoutOfNodes(sonList);
                let maxWidth = 0;
                let maxHeight = 0;
                for (const son of sonList) {
                    if (son.position && son.width && son.height) {
                        maxWidth = Math.max(maxWidth, son.position.x + son.width / 2 + 20);
                        maxHeight = Math.max(maxHeight, son.position.y + son.height / 2 + 50);
                    }
                }
                node.width = Math.max(Math.max(minWidth, nameWidth), maxWidth);
                node.height = Math.max(minHeight, maxHeight);
                console.log("====", node.height);
            } else if (node.content) {
                node.width = Math.max(minWidth, Math.max(nameWidth, ctx.measureText(node.content).width + 20));
                node.height = minHeight;
            } else {
                if (node.nodeType === NodeType.COMMON) {
                    node.width = minWidth;
                    node.height = minHeight;
                } else {
                    node.width = 40;
                    node.height = 40;
                }
            }
        }

        // 确定相对位置
        pointList = [];
        bestScore = INF * INF;
        search(nodeList, 0);
        let minX = 0;
        let minY = 0;
        for (let i = 0; i < pointList.length; i++) {
            const point = pointList[i];
            const node = nodeList[i];
            minX = Math.min(minX, point.x - (node.width ?? 0) / 2);
            minY = Math.min(minY, point.y - (node.height ?? 0) / 2);
        }
        for (let i = 0; i < pointList.length; i++) {
            const point = pointList[i];
            point.x -= minX - 20;
            point.y -= minY - 20;
            nodeList[i].position = {x: point.x, y: point.y};
        }
        console.log(pointList);
    };

    const calculateAbsPosition = (nodeList: Node[]) => {
        for (const node of nodeList) {
            if (node.parentId) {
                const parent = stateGraph.nodeList.find(nod => nod.nodeId === node.parentId);
                if (parent && parent.position && parent.width && parent. height) {
                    const p = {x: parent.position.x - parent.width / 2, y: parent. position.y - parent.height / 2};
                    if (node.position) {
                        node.position = {x: p.x + node.position.x, y: p.y + node.position.y + 30};
                    }
                }
            }
            const sonList: Node[] = [];
            for (const sonId of node.sonIdList) {
                const son = stateGraph.nodeList.find(nod => nod.nodeId === sonId);
                if (son) {
                    sonList.push(son);
                }
            }
            if (sonList.length > 0) {
                calculateAbsPosition(sonList);
            }
        }
    };

    const topNodeList: Node[] = [];
    for (const node of stateGraph.nodeList) {
        if (node.parentId === undefined) {
            topNodeList.push(node);
        }
    }

    calculateLayoutOfNodes(topNodeList);

    calculateAbsPosition(topNodeList);

    for (const node of stateGraph.nodeList) {
        node.used = [false, false, false, false];
    }
    for (const link of stateGraph.linkList) {
        const node1 = stateGraph.nodeList.find(nod => nod.nodeId === link.fromId);
        const node2 = stateGraph.nodeList.find(nod => nod.nodeId === link.toId);
        if (node1 && node2) {
            const segment = getLinkOfNode(node1, node2);
            link.beginP = segment.a;
            link.endP = segment.b;
        }
    }

    return stateGraph;
}