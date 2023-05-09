import { Point } from "@/types/point";


const backLength = 60; // 折返距离

// 实心箭头
export function DrawArrowSolid(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    const dir = endP.x > beginP.x ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    if (beginP.y === endP.y) {
        ctx.lineTo(endP.x, endP.y);
    } else {
        ctx.lineTo(beginP.x + backLength, beginP.y);
        ctx.lineTo(beginP.x + backLength, endP.y);
        ctx.lineTo(endP.x, endP.y);
    }
    ctx.stroke();
    
    // 箭头
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y);
    ctx.lineTo(endP.x - 7 * dir, endP.y);
    ctx.lineTo(endP.x - 11 * dir, endP.y - 4);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y + 1);
    ctx.lineTo(endP.x - 7 * dir, endP.y + 1);
    ctx.lineTo(endP.x - 11 * dir, endP.y + 5);
    ctx.fill();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (beginP.y === endP.y) {
        ctx.textAlign = "center";
        ctx.fillText(content, (beginP.x + endP.x) / 2, beginP.y - 7);
    } else {
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + backLength / 2, beginP.y - 7);
    }
}

// 虚线箭头
export function DrawArrowDotted(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 2;
    ctx.fillStyle = "rgb(0,0,0)";
    const dir = endP.x > beginP.x ? 1 : -1;
    ctx.beginPath();
    ctx.setLineDash([2, 2]);
    ctx.moveTo(beginP.x, beginP.y);
    if (beginP.y === endP.y) {
       ctx.lineTo(endP.x - dir * 5, endP.y);
    } else {
        ctx.lineTo(beginP.x + backLength, beginP.y);
        ctx.lineTo(beginP.x + backLength, endP.y);
        ctx.lineTo(endP.x - dir * 5, endP.y);
    }
    ctx.stroke();
    ctx.setLineDash([1, 0]);

    // 箭头
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y);
    ctx.lineTo(endP.x - 11 * dir, endP.y - 4);
    ctx.lineTo(endP.x - 7 * dir, endP.y);
    ctx.lineTo(endP.x - 7 * dir, endP.y + 1);
    ctx.lineTo(endP.x - 11 * dir, endP.y + 5);
    ctx.fill();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (beginP.y === endP.y) {
        ctx.textAlign = "center";
        ctx.fillText(content, (beginP.x + endP.x) / 2, beginP.y - 7);
    } else {
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + backLength / 2, beginP.y - 7);
    }
}

// 空心箭头
export function DrawArrowHollow(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    const dir = endP.x > beginP.x ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    if (beginP.y === endP.y) {
        ctx.lineTo(endP.x, endP.y);
    } else {
        ctx.lineTo(beginP.x + backLength, beginP.y);
        ctx.lineTo(beginP.x + backLength, endP.y);
        ctx.lineTo(endP.x, endP.y);
    }
    ctx.stroke();

    // 箭头
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y);
    ctx.lineTo(endP.x - 11 * dir, endP.y - 4);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y + 1);
    ctx.lineTo(endP.x - 11 * dir, endP.y + 5);
    ctx.stroke();
    ctx.closePath();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (beginP.y === endP.y) {
        ctx.textAlign = "center";
        ctx.fillText(content, (beginP.x + endP.x) / 2, beginP.y - 7);
    } else {
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + backLength / 2, beginP.y - 7);
    }
}

// 打叉箭头（同步消息）
export function DrawArrowCross(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    const dir = endP.x > beginP.x ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    if (beginP.y === endP.y) {
        ctx.lineTo(endP.x, endP.y);
    } else {
        ctx.lineTo(beginP.x + backLength, beginP.y);
        ctx.lineTo(beginP.x + backLength, endP.y);
        ctx.lineTo(endP.x, endP.y);
    }
    ctx.stroke();

    // 箭头
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y);
    ctx.lineTo(endP.x - 11 * dir, endP.y - 4);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y + 1);
    ctx.lineTo(endP.x - 11 * dir, endP.y + 5);
    ctx.stroke();
    ctx.closePath();

    // 叉叉
    ctx.beginPath();
    ctx.moveTo(endP.x - 30 * dir, endP.y - 5);
    ctx.lineTo(endP.x - 20 * dir, endP.y + 6);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(endP.x - 20 * dir, endP.y - 5);
    ctx.lineTo(endP.x - 30 * dir, endP.y + 6);
    ctx.stroke();
    ctx.closePath();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (beginP.y === endP.y) {
        ctx.textAlign = "center";
        ctx.fillText(content, (beginP.x + endP.x) / 2, beginP.y - 7);
    } else {
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + backLength / 2, beginP.y - 7);
    }
}

// 半边箭头 (异步消息)
export function DrawArrowHalf(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, content: string) {
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    const dir = endP.x > beginP.x ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y);
    if (beginP.y === endP.y) {
        ctx.lineTo(endP.x, endP.y);
    } else {
        ctx.lineTo(beginP.x + backLength, beginP.y);
        ctx.lineTo(beginP.x + backLength, endP.y);
        ctx.lineTo(endP.x, endP.y);
    }
    ctx.stroke();

    // 箭头
    ctx.beginPath();
    ctx.moveTo(endP.x - 1 * dir, endP.y);
    ctx.lineTo(endP.x - 11 * dir, endP.y - 4);
    ctx.stroke();
    ctx.closePath();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    if (beginP.y === endP.y) {
        ctx.textAlign = "center";
        ctx.fillText(content, (beginP.x + endP.x) / 2, beginP.y - 7);
    } else {
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + backLength / 2, beginP.y - 7);
    }
}