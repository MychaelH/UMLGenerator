import { Point } from "@/types/point";

const colorStyle = "rgb(237, 222, 199)";
const redColor = "rgb(176,23,73)";

// 生命线
export function DrawLifeLine(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point, isCross?: boolean) {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.setLineDash([8, 6]);
    ctx.moveTo(beginP.x, beginP.y);
    ctx.lineTo(endP.x, endP.y);
    ctx.stroke();
    ctx.setLineDash([1, 0]);

    if (isCross) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = redColor;
        ctx.beginPath();
        ctx.moveTo(endP.x - 10, endP.y - 10);
        ctx.lineTo(endP.x + 10, endP.y + 10);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(endP.x + 10, endP.y - 10);
        ctx.lineTo(endP.x - 10, endP.y + 10);
        ctx.stroke();
        ctx.strokeStyle = "rgb(0,0,0)";
    }
}

// 激活区间
const activateWidth = 12;
export function DrawActive(ctx: CanvasRenderingContext2D, beginP: Point, endP: Point) {
    ctx.lineWidth = 1;
    ctx.fillStyle = colorStyle;
    ctx.fillRect(beginP.x - activateWidth / 2, beginP.y, activateWidth, Math.abs(endP.y - beginP.y));
    ctx.beginPath();
    ctx.moveTo(beginP.x - activateWidth / 2, beginP.y);
    ctx.lineTo(beginP.x + activateWidth / 2, beginP.y);
    ctx.lineTo(beginP.x + activateWidth / 2, endP.y);
    ctx.lineTo(beginP.x - activateWidth / 2, endP.y);
    ctx.closePath();
    ctx.stroke();
}

// 角色
export function DrawActor(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 2;

    // 头
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 80, 15, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 80, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 身子
    ctx.beginPath();
    ctx.moveTo(beginP.x - 15, beginP.y - 57);
    ctx.lineTo(beginP.x + 15, beginP.y - 57);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y - 65);
    ctx.lineTo(beginP.x, beginP.y - 40);
    ctx.stroke();

    // 脚
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y - 40);
    ctx.lineTo(beginP.x - 15, beginP.y - 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y - 40);
    ctx.lineTo(beginP.x + 15, beginP.y - 20);
    ctx.stroke();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y);
}

// 边界
export function DrawBoundary(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 2;

    // 圆
    ctx.beginPath();
    ctx.arc(beginP.x + 15, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(beginP.x + 15, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 线
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y - 40);
    ctx.lineTo(beginP.x - 20, beginP.y - 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(beginP.x - 20, beginP.y - 55);
    ctx.lineTo(beginP.x - 20, beginP.y - 25);
    ctx.stroke();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y);
}

// 控制
export function DrawControl(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 2;

    // 圆
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 箭头
    ctx.beginPath();
    ctx.moveTo(beginP.x, beginP.y - 55);
    ctx.lineTo(beginP.x + 5, beginP.y - 58);
    ctx.lineTo(beginP.x + 3, beginP.y - 55);
    ctx.lineTo(beginP.x + 5, beginP.y - 52);
    ctx.closePath();
    ctx.stroke();
    

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y);
}

// 实体
export function DrawEntity(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 2;

    // 圆
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(beginP.x, beginP.y - 40, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 直线
    ctx.beginPath();
    ctx.moveTo(beginP.x - 15, beginP.y - 22);
    ctx.lineTo(beginP.x + 15, beginP.y - 22);
    ctx.stroke();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y);
}

// 数据库
export function DrawDatabase(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 1;

    // 圆柱体填充
    ctx.beginPath();
    WalkEllipse(ctx, beginP.x, beginP.y - 70, 20, 10, 0, 2 * Math.PI);
    ctx.lineTo(beginP.x + 20, beginP.y - 30);
    WalkEllipse(ctx, beginP.x, beginP.y - 30, 20, 10, 0, Math.PI);
    ctx.lineTo(beginP.x - 20, beginP.y - 70);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 圆柱体描边
    ctx.beginPath();
    WalkEllipse(ctx, beginP.x, beginP.y - 70, 20, 10, 0, 2 * Math.PI);
    ctx.lineTo(beginP.x + 20, beginP.y - 30);
    WalkEllipse(ctx, beginP.x, beginP.y - 30, 20, 10, 0, Math.PI);
    ctx.lineTo(beginP.x - 20, beginP.y - 70);
    ctx.stroke();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y);
}

// 自定义参与者
export function DrawParticipant(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 1;

    // 填充长方形
    const text = ctx.measureText(content);
    const width = text.width + 20;
    const height = 40;
    ctx.fillStyle = colorStyle;
    ctx.fillRect(beginP.x - width / 2, beginP.y - height, width, height);

    // 描边长方形
    ctx.beginPath();
    ctx.moveTo(beginP.x - width / 2, beginP.y - height);
    ctx.lineTo(beginP.x + width / 2, beginP.y - height);
    ctx.lineTo(beginP.x + width / 2, beginP.y);
    ctx.lineTo(beginP.x - width / 2, beginP.y);
    ctx.closePath();
    ctx.stroke();

    
    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y - 16);
}

// 集合
export function DrawCollections(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 1;
    const text = ctx.measureText(content);
    const width = text.width + 20;
    const height = 40;
    const offset = 5;

    // 填充长方形（后）
    ctx.fillStyle = colorStyle;
    ctx.fillRect(beginP.x - width / 2 + offset, beginP.y - height - offset, width, height);

    // 描边长方形（后）
    ctx.beginPath();
    ctx.moveTo(beginP.x - width / 2 + offset, beginP.y - height - offset);
    ctx.lineTo(beginP.x + width / 2 + offset, beginP.y - height - offset);
    ctx.lineTo(beginP.x + width / 2 + offset, beginP.y - offset);
    ctx.lineTo(beginP.x - width / 2 + offset, beginP.y - offset);
    ctx.closePath();
    ctx.stroke();

    // 填充长方形
    ctx.fillStyle = colorStyle;
    ctx.fillRect(beginP.x - width / 2, beginP.y - height, width, height);

    // 描边长方形
    ctx.beginPath();
    ctx.moveTo(beginP.x - width / 2, beginP.y - height);
    ctx.lineTo(beginP.x + width / 2, beginP.y - height);
    ctx.lineTo(beginP.x + width / 2, beginP.y);
    ctx.lineTo(beginP.x - width / 2, beginP.y);
    ctx.closePath();
    ctx.stroke();

    
    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y - 16);
}

// 队列
export function DrawQueue(ctx: CanvasRenderingContext2D, beginP: Point, content: string) {
    ctx.lineWidth = 1;
    const text = ctx.measureText(content);
    const width = text.width + 20;
    const height = 40;

    // 圆柱体填充
    ctx.beginPath();
    WalkEllipse(ctx, beginP.x + width / 2 + 10, beginP.y - 20, 5, 20, 0, 2 * Math.PI);
    ctx.moveTo(beginP.x + width / 2 + 10, beginP.y)
    ctx.lineTo(beginP.x - width / 2, beginP.y);
    WalkEllipse(ctx, beginP.x - width / 2, beginP.y - 20, 5, 20, 0.5 * Math.PI, 1.5 * Math.PI);
    ctx.lineTo(beginP.x + width / 2 + 10, beginP.y - 40);
    ctx.fillStyle = colorStyle;
    ctx.fill();

    // 圆柱体描边
    ctx.beginPath();
    WalkEllipse(ctx, beginP.x + width / 2 + 10, beginP.y - 20, 5, 20, 0, 2 * Math.PI);
    ctx.moveTo(beginP.x + width / 2 + 10, beginP.y)
    ctx.lineTo(beginP.x - width / 2, beginP.y);
    WalkEllipse(ctx, beginP.x - width / 2, beginP.y - 20, 5, 20, 0.5 * Math.PI, 1.5 * Math.PI);
    ctx.lineTo(beginP.x + width / 2 + 10, beginP.y - 40);
    ctx.stroke();

    // 文本
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(content, beginP.x, beginP.y - 16);
}


// 椭圆轨迹
function WalkEllipse(ctx: CanvasRenderingContext2D, x: number, y: number, a: number, b: number, beginR: number, endR: number) {
    var step = (a > b) ? 1 / a : 1 / b;
    for(var i = beginR; i < endR; i += step) {
        ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
    }
}