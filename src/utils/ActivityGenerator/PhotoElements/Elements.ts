import { CurveType } from "@/types/activityGraph";
import { Point } from "@/types/point";

const colorStyle = "rgb(237, 222, 199)";

export function DrawNode(ctx: CanvasRenderingContext2D, position: Point, content: string) {
    ctx.lineWidth = 1;

    // 填充长方形
    const text = ctx.measureText(content);
    const width = text.width + 40;
    const height = 50;
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

    
    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, position.x, position.y);
}

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

export function DrawEnd(ctx: CanvasRenderingContext2D, position: Point) {
    const radius = 20;
    const delta = radius / Math.sqrt(2);
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(position.x - delta, position.y - delta);
    ctx.lineTo(position.x + delta, position.y + delta);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(position.x + delta, position.y - delta);
    ctx.lineTo(position.x - delta, position.y + delta);
    ctx.stroke();
}

// 绘制分支
export function DrawAlt(ctx: CanvasRenderingContext2D, position: Point, content: string) {
    ctx.lineWidth = 1;

    // 填充
    const text = ctx.measureText(content);
    const width = text.width + 10;
    const height = 40;
    ctx.fillStyle = colorStyle;
    ctx.beginPath();
    ctx.moveTo(position.x - width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2 + 15, position.y);
    ctx.lineTo(position.x + width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2 - 15, position.y);
    ctx.closePath();
    ctx.fill();

    // 描边
    ctx.beginPath();
    ctx.moveTo(position.x - width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2 + 15, position.y);
    ctx.lineTo(position.x + width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2 - 15, position.y);
    ctx.closePath();
    ctx.stroke();
    
    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, position.x, position.y);
}

// 绘制汇合节点
export function DrawGather(ctx: CanvasRenderingContext2D, position: Point) {
    ctx.lineWidth = 1;

    // 填充
    ctx.fillStyle = colorStyle;
    ctx.beginPath();
    ctx.moveTo(position.x, position.y - 20);
    ctx.lineTo(position.x + 20, position.y);
    ctx.lineTo(position.x, position.y + 20);
    ctx.lineTo(position.x - 20, position.y);
    ctx.closePath();
    ctx.fill();

    // 描边
    ctx.beginPath();
    ctx.moveTo(position.x, position.y - 20);
    ctx.lineTo(position.x + 20, position.y);
    ctx.lineTo(position.x, position.y + 20);
    ctx.lineTo(position.x - 20, position.y);
    ctx.closePath();
    ctx.stroke();
}

// 绘制并行条
export function DrawBar(ctx: CanvasRenderingContext2D, position: Point, width: number) {
    ctx.lineWidth = 1;
    const height = 6;

    // 填充
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(position.x - width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y - height / 2);
    ctx.lineTo(position.x + width / 2, position.y + height / 2);
    ctx.lineTo(position.x - width / 2, position.y + height / 2);
    ctx.closePath();
    ctx.fill();
}

// 绘制泳道
export function DrawSwimlane(ctx: CanvasRenderingContext2D, left: number, right: number, height: number, content: string) {
    ctx.lineWidth = 2;

    ctx.beginPath()
    ctx.moveTo(left, 10);
    ctx.lineTo(left, height);
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo(right, 10);
    ctx.lineTo(right, height);
    ctx.stroke();

    // 文本
    ctx.font = "20px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, (left + right) / 2, 30);
}

// 绘制箭头
export function DrawArrow(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, curveType: CurveType, content: string) {
    ctx.lineWidth = 1;

    if (beginP.x === endP.x && curveType !== CurveType.BACK) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x + 6, endP.y - 15);
        ctx.lineTo(endP.x, endP.y - 10);
        ctx.lineTo(endP.x - 6, endP.y - 15);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y + 20);
    } else if (beginP.y === endP.y && curveType !== CurveType.BACK) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x - 15, endP.y + 6);
        ctx.lineTo(endP.x - 10, endP.y);
        ctx.lineTo(endP.x - 15, endP.y - 6);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y - 5);
    } else if (curveType == CurveType.DIRECT) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(beginP.x, beginP.y + 10);
        ctx.lineTo(endP.x, beginP.y + 10);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x + 6, endP.y - 15);
        ctx.lineTo(endP.x, endP.y - 10);
        ctx.lineTo(endP.x - 6, endP.y - 15);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y + 20);
    } else if (curveType == CurveType.UP) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(endP.x, beginP.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x + 6, endP.y - 15);
        ctx.lineTo(endP.x, endP.y - 10);
        ctx.lineTo(endP.x - 6, endP.y - 15);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y - 5);
    } else if (curveType == CurveType.DOWN) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(beginP.x, endP.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x - 15, endP.y + 6);
        ctx.lineTo(endP.x - 10, endP.y);
        ctx.lineTo(endP.x - 15, endP.y - 6);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y + 20);
    } else if (curveType === CurveType.BACK) {
        // 线条
        ctx.beginPath();
        ctx.moveTo(beginP.x, beginP.y);
        ctx.lineTo(beginP.x + 100, beginP.y);
        ctx.lineTo(beginP.x + 100, endP.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.stroke();

        // 箭头
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(endP.x + 15, endP.y + 6);
        ctx.lineTo(endP.x + 10, endP.y);
        ctx.lineTo(endP.x + 15, endP.y - 6);
        ctx.closePath();
        ctx.fill();

        // 文本
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(content, beginP.x + 10, beginP.y - 10);
    }
}