import { Point, pAdd, pDiv, pMinus, pModule, pMul } from "@/types/point";

const colorStyle = "rgb(237, 222, 199)";

export function DrawStart(ctx: CanvasRenderingContext2D, position: Point) {
    const radius = 20;
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

export function DrawStop(ctx: CanvasRenderingContext2D, position: Point) {
    const radius = 20;
    const radius2 = 12;
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius2, 0, Math.PI * 2, true);
    ctx.fill();
}

export function DrawChoice(ctx: CanvasRenderingContext2D, position: Point) {
    const radius = 20;
    ctx.lineWidth = 1;
    ctx.fillStyle = colorStyle;
    ctx.beginPath();
    ctx.moveTo(position.x, position.y - radius);
    ctx.lineTo(position.x + radius, position.y);
    ctx.lineTo(position.x, position.y + radius);
    ctx.lineTo(position.x - radius, position.y);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(position.x, position.y - radius);
    ctx.lineTo(position.x + radius, position.y);
    ctx.lineTo(position.x, position.y + radius);
    ctx.lineTo(position.x - radius, position.y);
    ctx.closePath();
    ctx.stroke();
}

export function DrawNode(ctx: CanvasRenderingContext2D, position: Point, width: number, height: number, name: string, content?: string) {
    const radius = 10;
    ctx.lineWidth = 1;
    // 节点头背景
    ctx.fillStyle = colorStyle;
    ctx.beginPath();
    ctx.moveTo(position.x, position.y + radius);
    ctx.arc(position.x + radius, position.y + radius, radius, Math.PI, Math.PI * 1.5, false);
    ctx.lineTo(position.x + width - radius, position.y);
    ctx.arc(position.x + width - radius, position.y + radius, radius, Math.PI * 1.5, Math.PI * 2, false);
    ctx.lineTo(position.x + width, position.y + 30);
    ctx.lineTo(position.x, position.y + 30);
    ctx.lineTo(position.x, position.y + radius);
    ctx.fill();

    // 节点边框
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(position.x, position.y + radius);
    ctx.arc(position.x + radius, position.y + radius, radius, Math.PI, Math.PI * 1.5, false);
    ctx.lineTo(position.x + width - radius, position.y);
    ctx.arc(position.x + width - radius, position.y + radius, radius, Math.PI * 1.5, Math.PI * 2, false);
    ctx.lineTo(position.x + width, position.y + height - radius);
    ctx.arc(position.x + width - radius, position.y + height - radius, radius, 0, Math.PI * 0.5, false);
    ctx.lineTo(position.x + radius, position.y + height);
    ctx.arc(position.x + radius, position.y + height - radius, radius, Math.PI * 0.5, Math.PI, false);
    ctx.lineTo(position.x, position.y + radius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(position.x, position.y + 30);
    ctx.lineTo(position.x + width, position.y + 30);
    ctx.stroke();

    // 节点名
    ctx.font = "16px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(name, position.x + width / 2, position.y + 20);

    // 文本
    if (content) {
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, position.x + 4, position.y + 46);
    }
}

export function DrawLink(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";

    // 直线
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    ctx.lineTo(endP.x, endP.y);
    ctx.stroke();

    // 箭头
    const lineVector = pMinus(endP, beginP);
    const unitVector = pDiv(lineVector, pModule(lineVector));
    const crossUnitVector = {x: unitVector.y, y: -unitVector.x};
    const triangleUpPoint = pAdd(pMinus(endP, pMul(unitVector, 9)), pMul(crossUnitVector, 5));
    const triangleDownPoint = pAdd(pMinus(endP, pMul(unitVector, 9)), pMul(crossUnitVector, -5));
    const inPoint = pMinus(endP, pMul(unitVector, 4));
    ctx.beginPath();
    ctx.moveTo(endP.x, endP.y);
    ctx.lineTo(triangleUpPoint.x, triangleUpPoint.y);;
    ctx.lineTo(inPoint.x, inPoint.y);
    ctx.lineTo(triangleDownPoint.x, triangleDownPoint.y);;
    ctx.closePath();
    ctx.fill();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    const midPoint = pDiv(pAdd(beginP, endP), 2);
    ctx.fillText(content, midPoint.x, midPoint.y - 5);
}