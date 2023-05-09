const colorStyle = "rgb(237, 222, 199)";

export type Divider = {
    y: number;
    content: string;
}

export function DrawGroup(
    ctx: CanvasRenderingContext2D,
    topY: number,
    bottomY: number,
    leftX: number,
    rightX: number,
    title: string,
    content: string,
    dividerList?: Divider[]
) {
    const titleMeasure = ctx.measureText(title);
    const titleWidth = titleMeasure.width + 40;

    ctx.lineWidth = 2;

    // 片段标题
    ctx.beginPath();
    ctx.moveTo(leftX, topY);
    ctx.lineTo(leftX, topY + 25);
    ctx.lineTo(leftX + titleWidth, topY + 25);
    ctx.lineTo(leftX + titleWidth + 10, topY + 15);
    ctx.lineTo(leftX + titleWidth + 10, topY);
    ctx.closePath();
    ctx.fillStyle = colorStyle;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(leftX, topY);
    ctx.lineTo(leftX, topY + 25);
    ctx.lineTo(leftX + titleWidth, topY + 25);
    ctx.lineTo(leftX + titleWidth + 10, topY + 15);
    ctx.lineTo(leftX + titleWidth + 10, topY);
    ctx.closePath();
    ctx.stroke();

    // 框架
    ctx.beginPath();
    ctx.moveTo(leftX, topY);
    ctx.lineTo(rightX, topY);
    ctx.lineTo(rightX, bottomY);
    ctx.lineTo(leftX, bottomY);
    ctx.closePath();
    ctx.stroke();

    // 标题
    ctx.font = "14px serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.textAlign = "center";
    ctx.fillText(title, leftX + titleWidth / 2, topY + 16);

    // 文本
    if (content.length > 0) {
        const showContent = '[' + content + ']';
        const contextMeasure = ctx.measureText(showContent);
        ctx.font = "14px serif";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.textAlign = "left";
        ctx.fillText(showContent, leftX + titleWidth + 20, topY + 16);
    }

    // 分割线
    if (dividerList) {
        for (const divider of dividerList) {
            ctx.beginPath();
            ctx.setLineDash([2, 2]);
            ctx.moveTo(leftX, divider.y);
            ctx.lineTo(rightX, divider.y);
            ctx.stroke();
            ctx.setLineDash([1, 0]);
            if (divider.content.length > 0) {
                const showContent = '[' + divider.content + ']';
                const contextMeasure = ctx.measureText(showContent);
                ctx.font = "14px serif";
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.textAlign = "left";
                ctx.fillText(showContent, leftX + 5, divider.y + 16);
            }
        }
    }
}
