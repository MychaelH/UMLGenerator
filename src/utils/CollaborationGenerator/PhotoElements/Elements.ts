import { pAdd, pDiv, pMid, pMinus, pModule, pMul, Point } from "@/types/point";

const colorStyle = "rgb(237, 222, 199)";

// 对象
export function DrawObject(ctx: CanvasRenderingContext2D, position: Point, width: number, height: number, name: string, tag: string){
    ctx.lineWidth = 1;

    // 填充长方形
    ctx.fillStyle = colorStyle;
    ctx.fillRect(position.x - width / 2, position.y - height / 2, width, height);

    // 描边长方形
    ctx.beginPath();
    ctx.moveTo(position.x - width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2, position.y + height / 2);
    ctx.closePath();
    ctx.stroke();

    // 对象名
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(name, position.x, position.y + 2);

    // 标签
    ctx.font = "12px serif";
    ctx.textAlign = "right";
    ctx.fillText(tag, position.x + width / 2 - 2, position.y - height / 2 + 12);
}

// 直链
export function DrawLink(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, contentA: string, contentB: string){
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";

    /* 直线 */
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    ctx.lineTo(endP.x, endP.y);
    ctx.stroke();

    /* 箭头 */
    // 确定箭头方向和位置
    const midPoint = pMid(beginP, endP);
    const lineVector = pMinus(endP, beginP);
    const lineUnitVector = pDiv(lineVector, pModule(lineVector));
    let crossUnitVector1 = {x: lineUnitVector.y, y: -lineUnitVector.x};
    if (crossUnitVector1.y > 0){
        crossUnitVector1 = pMul(crossUnitVector1, -1);
    }
    let crossUnitVector2 = pMul(crossUnitVector1, -1);
    let p1 = pAdd(midPoint, pMul(crossUnitVector1, 15));
    let p2 = pAdd(midPoint, pMul(crossUnitVector2, 15));
    const endP1 = pAdd(p1, pMul(lineUnitVector, 40));
    const endP2 = pAdd(p2, pMul(lineUnitVector, -40));
    // 画线条
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(endP1.x, endP1.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(endP2.x, endP2.y);
    ctx.stroke();
    // 确定箭头轮廓
    const triangleUpPoint1 = pAdd(pMinus(endP1, pMul(lineUnitVector, 7)), pMul(crossUnitVector1, 5));
    const triangleDownPoint1 = pAdd(pMinus(endP1, pMul(lineUnitVector, 7)), pMul(crossUnitVector1, -5));
    ctx.beginPath();
    ctx.moveTo(endP1.x, endP1.y);
    ctx.lineTo(triangleUpPoint1.x, triangleUpPoint1.y);
    ctx.lineTo(triangleDownPoint1.x, triangleDownPoint1.y);
    ctx.closePath();
    ctx.fill();
    const triangleUpPoint2 = pAdd(pAdd(endP2, pMul(lineUnitVector, 7)), pMul(crossUnitVector2, 5));
    const triangleDownPoint2 = pAdd(pAdd(endP2, pMul(lineUnitVector, 7)), pMul(crossUnitVector2, -5));
    ctx.beginPath();
    ctx.moveTo(endP2.x, endP2.y);
    ctx.lineTo(triangleUpPoint2.x, triangleUpPoint2.y);
    ctx.lineTo(triangleDownPoint2.x, triangleDownPoint2.y);
    ctx.closePath();
    ctx.fill();

    /* 文本 */
    const pText1 = pAdd(p1, pMul(crossUnitVector1, 8));
    const pText2 = pAdd(p2, pMul(crossUnitVector2, 16));
    // if (Math.abs(pText1.y - pText2.y) < 15) {
    //     pText1.y -= 8;
    //     pText2.y += 8;
    // }
    ctx.font = "12px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (lineUnitVector.y === 0) {
        ctx.textAlign = "center";
        ctx.fillText(contentA, pText1.x, pText1.y);
        ctx.fillText(contentB, pText2.x, pText2.y);
    } else if (lineUnitVector.x === 0){
        if (lineUnitVector.y < 0) {
            ctx.textAlign = "right";
            ctx.fillText(contentA, pText1.x, pText1.y);
            ctx.textAlign = "left";
            ctx.fillText(contentB, pText2.x, pText2.y);
        } else {
            ctx.textAlign = "left";
            ctx.fillText(contentA, pText1.x, pText1.y);
            ctx.textAlign = "right";
            ctx.fillText(contentB, pText2.x, pText2.y);
        }
    } else if (lineUnitVector.x * lineUnitVector.y > 0) {
        ctx.textAlign = "left";
        ctx.fillText(contentA, pText1.x, pText1.y);
        ctx.textAlign = "right";
        ctx.fillText(contentB, pText2.x, pText2.y);
    } else {
        ctx.textAlign = "right";
        ctx.fillText(contentA, pText1.x, pText1.y);
        ctx.textAlign = "left";
        ctx.fillText(contentB, pText2.x, pText2.y);
    }   
}

// 曲链
export function DrawLinkBack(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string){
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";

    /* 线 */
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    ctx.lineTo(beginP.x, beginP.y - 30);
    ctx.lineTo(beginP.x + 50, beginP.y - 30);
    ctx.lineTo(beginP.x + 50, endP.y);
    ctx.lineTo(endP.x, endP.y);
    ctx.stroke();

    /* 箭头 */
    const startP = {x: beginP.x + 50, y: beginP.y - 40};
    ctx.beginPath();
    ctx.moveTo(startP.x, startP.y);
    ctx.lineTo(startP.x + 30, startP.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(startP.x + 30, startP.y);
    ctx.lineTo(startP.x + 23, startP.y - 5);
    ctx.lineTo(startP.x + 23, startP.y + 5);
    ctx.closePath();
    ctx.fill();

    /* 文本 */
    ctx.font = "12px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "right";
    ctx.fillText(content, startP.x - 5, startP.y);
}