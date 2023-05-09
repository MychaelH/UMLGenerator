export type Point = {
    x: number;
    y: number;
};

export type Segment = {
    a: Point;
    b: Point;
}

export function pAdd(a: Point, b: Point) {
    return {x: a.x + b.x, y: a.y + b.y};
}

export function pMinus(a: Point, b: Point) {
    return {x: a.x - b.x, y: a.y - b.y};
}

export function pMul(a: Point, b: number) {
    return {x: a.x * b, y: a.y * b};
}

export function pDiv(a: Point, b: number) {
    return {x: a.x / b, y: a.y / b};
}

export function pDot(a: Point, b: Point) {
    return a.x * b.x + a.y * b.y;
}

export function pCross(a: Point, b: Point) {
    return a.x * b.y - a.y * b.x;
}

export function pMid(a: Point, b: Point) {
    return {x: (a.x + b.x) / 2, y: (a.y + b.y) / 2};
}

export function pModule(a: Point) {
    return Math.sqrt(pDot(a, a));
}

export function pDistance(a: Point, b: Point) {
    return pModule(pMinus(b, a));
}

export function isSegmentCrossSegment(s1: Segment, s2: Segment) {
    const vector1 = pMinus(s1.b, s1.a);
    const vector2 = pMinus(s2.b, s2.a);
    return pCross(vector1,pMinus(s2.a, s1.a)) * pCross(vector1,pMinus(s2.b, s1.a)) < 0
    && pCross(vector2,pMinus(s1.a, s2.a)) * pCross(vector2,pMinus(s1.b, s2.a)) < 0;
}

export function isSegmentCrossRec(s: Segment, pos: Point, width: number, height: number) {
    const pA = {x: pos.x - width / 2, y: pos.y - height / 2};
    const pB = {x: pos.x + width / 2, y: pos.y - height / 2};
    const pC = {x: pos.x + width / 2, y: pos.y + height / 2};
    const pD = {x: pos.x - width / 2, y: pos.y + height / 2};
    return isSegmentCrossSegment(s, {a: pA,b: pB}) || isSegmentCrossSegment(s, {a: pB,b: pC})
    || isSegmentCrossSegment(s, {a: pC,b: pD}) || isSegmentCrossSegment(s, {a: pD,b: pA});
}

export function isRecCrossRec(pos1: Point, width1: number, height1: number, pos2: Point, width2: number, height2: number) {
    const pA = {x: pos1.x - width1 / 2, y: pos1.y - height1 / 2};
    const pB = {x: pos1.x + width1 / 2, y: pos1.y - height1 / 2};
    const pC = {x: pos1.x + width1 / 2, y: pos1.y + height1 / 2};
    const pD = {x: pos1.x - width1 / 2, y: pos1.y + height1 / 2};

    const p1 = {x: pos2.x - width2 / 2, y: pos2.y - height2 / 2};
    const p2 = {x: pos2.x + width2 / 2, y: pos2.y - height2 / 2};
    const p3 = {x: pos2.x + width2 / 2, y: pos2.y + height2 / 2};
    const p4 = {x: pos2.x - width2 / 2, y: pos2.y + height2 / 2};

    return (pA.x >= p1.x && pA.x <= p2.x && pA.y >= p2.y && pA.y <= p3.y) || 
    (pB.x >= p1.x && pB.x <= p2.x && pB.y >= p2.y && pB.y <= p3.y) || 
    (pC.x >= p1.x && pC.x <= p2.x && pC.y >= p2.y && pC.y <= p3.y) || 
    (pD.x >= p1.x && pD.x <= p2.x && pD.y >= p2.y && pD.y <= p3.y) || 
    (p1.x >= pA.x && p1.x <= pB.x && p1.y >= pB.y && p1.y <= pC.y) || 
    (p2.x >= pA.x && p2.x <= pB.x && p2.y >= pB.y && p2.y <= pC.y) || 
    (p3.x >= pA.x && p3.x <= pB.x && p3.y >= pB.y && p3.y <= pC.y) || 
    (p4.x >= pA.x && p4.x <= pB.x && p4.y >= pB.y && p4.y <= pC.y);
}
