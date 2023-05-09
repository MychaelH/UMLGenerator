import { CollaborationGraph } from "@/types/collaborationGraph";
import { isSegmentCrossRec, isSegmentCrossSegment, pDistance, Point, Segment } from "@/types/point";

const gapX = 350;
const gapY = 300;
const objMinLength = 100;
const objHeight = 70;
const deltaX = [0, 1, 0, -1];
const deltaY = [-1, 0, 1, 0];
const INF = 10000000;
const segmentCrossScore = 100000;

export function CollaborationLayout(ctx: CanvasRenderingContext2D, collaborationGraph: CollaborationGraph){
    ctx.font = "14px serif";
    const gridWidth = Math.ceil(Math.sqrt(collaborationGraph.objectList.length)) + 1;
    const maxN = collaborationGraph.objectList.length;
    let positionIdList: number[] = [];
    let isIdUsed: boolean[] = [];
    let bestPosition: number[] = [];
    let bestScore = INF * INF;
    let searchCount = 100000000;
    for (const obj of collaborationGraph.objectList) {
        const nameLength = Math.max(Math.max(ctx.measureText(obj.name ?? '').width, ctx.measureText(obj.tag ?? '').width) + 30, objMinLength);
        obj.width = nameLength;
        obj.height = objHeight;
        isIdUsed.push(false);
    }

    const getPositionByIdx = (idx: number) => {
        return {x: gapX * (idx % gridWidth + 1), y: gapY * (Math.floor(idx / gridWidth) + 1)};
    }

    const getLinkOfObj = (idA: number, positionA: Point, idB: number, positionB: Point) => {
        let minDis = INF;
        let link: Segment = {a: {x: 0, y:0}, b: {x: 0, y:0}};
        const widthA = collaborationGraph.objectList[idA - 1].width ?? 0;
        const heightA = collaborationGraph.objectList[idA - 1].height ?? 0;
        const widthB = collaborationGraph.objectList[idB - 1].width ?? 0;
        const heightB = collaborationGraph.objectList[idB - 1].height ?? 0;
        for (let i = 0; i < 4; i++) {
            const pA = {x: positionA.x + widthA / 2 * deltaX[i], y: positionA.y + heightA / 2 * deltaY[i]};
            for (let j = 0; j < 4; j++) {
                const pB = {x: positionB.x + widthB / 2 * deltaX[j], y: positionB.y + heightB / 2 * deltaY[j]};
                const dis = pDistance(pA, pB);
                if (dis < minDis){
                    minDis = dis;
                    link = {a: pA, b: pB};
                }
            }
        }
        return link;
    }

    const getScore = () => {
        let positionList = positionIdList.map(positionId => getPositionByIdx(positionId));
        let score = 0;
        let segmentList: Segment[] = [];
        for (const link of collaborationGraph.linkList) {
            if (link.objAId > positionIdList.length || link.objBId > positionIdList.length || link.objAId === link.objBId) {
                continue
            }
            const seg = getLinkOfObj(link.objAId, positionList[link.objAId - 1], link.objBId, positionList[link.objBId - 1])
            segmentList.push(seg);
            score += pDistance(seg.a, seg.b);
        }
        for (let i = 0; i < segmentList.length; i++) {
            for (let j = 0; j < i; j++) {
                if (isSegmentCrossSegment(segmentList[i], segmentList[j])) {
                    score += segmentCrossScore;
                }
            }
            for (let j = 0; j < positionList.length; j++) {
                if (isSegmentCrossRec(
                    segmentList[i],
                    positionList[j],
                    collaborationGraph.objectList[j].width ?? 0,
                    collaborationGraph.objectList[j].height ?? 0)
                    ){
                        score += INF;
                }
            }
        }
        return score
    };

    const search = (id: number) => {
        searchCount--;
        if (searchCount <= 0) {
            return;
        }
        for (let i = 0; i < maxN; i++) {
            if (isIdUsed[i]) {
                continue
            }
            positionIdList.push(i);
            isIdUsed[i] = true;
            const score = getScore();
            if (score >= bestScore) {
                positionIdList.pop();
                isIdUsed[i] = false;
                continue
            }
            if (id === maxN - 1) {
                bestScore = score;
                bestPosition = [];
                for (const pos of positionIdList) {
                    bestPosition.push(pos);
                }
            } else {
                search(id + 1);
            }
            positionIdList.pop();
            isIdUsed[i] = false;
        }
    }

    search(0);
    for (const obj of collaborationGraph.objectList) {
        obj.position = getPositionByIdx(bestPosition[obj.objectId - 1]);
        // console.log("===", obj.position, ", ", bestPosition[obj.objectId - 1]);
    }
    for (const link of collaborationGraph.linkList) {
        if (link.objAId !== link.objBId) {
            const seg = getLinkOfObj(
                link.objAId,
                collaborationGraph.objectList[link.objAId - 1].position ?? {x: 0, y:0},
                link.objBId,
                collaborationGraph.objectList[link.objBId - 1].position ?? {x: 0, y:0}
            );
            link.beginP = seg.a;
            link.endP = seg.b;
        } else {
            const obj = collaborationGraph.objectList[link.objAId - 1];
            if (obj.position && obj.width && obj.height){
                link.beginP = {x: obj.position?.x + obj.width / 2 - 25,y: obj.position?.y - obj.height / 2};
                link.endP = {x: obj.position?.x + obj.width / 2,y: obj.position?.y - obj.height / 2 + 25};
            }
        }
    }

    return collaborationGraph;
}
