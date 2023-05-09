import { CollaborationGraph } from "@/types/collaborationGraph";
import { pAdd, pDiv, pMid, pMinus, pModule, pMul, Point } from "@/types/point";
import { DrawLink, DrawLinkBack, DrawObject } from "./PhotoElements/Elements";

export function CollaborationDrawer(ctx: CanvasRenderingContext2D, collaborationGraph: CollaborationGraph) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Test(ctx, collaborationGraph);

    for (const obj of collaborationGraph.objectList) {
        // console.log("hhhhh", obj.position, ", ", obj.width, ", ", obj.height);
        DrawObject(ctx, obj.position ?? {x: 0, y: 0}, obj.width ?? 0, obj.height ?? 0, obj.name, obj.tag);
    }
    for (const link of collaborationGraph.linkList) {
        if (link.objAId !== link.objBId) {
            DrawLink(ctx, link.beginP ?? {x: 0, y: 0}, link.endP ?? {x: 0, y: 0}, link.contentA, link.contentB);
        } else {
            DrawLinkBack(ctx, link.beginP ?? {x: 0, y: 0}, link.endP ?? {x: 0, y: 0}, link.contentA);
        }
    }
}

function DrawLove(ctx: CanvasRenderingContext2D) {
    const oX = 220, oY = 220;
    const step = 1.0 / 10;
    let first = true;
    ctx.fillStyle = "#f05c5c";
    ctx.beginPath();
    for(var x = -1; x < 1; x += step) {
        if (first) {
            ctx.moveTo(oX + x, oY + (Math.pow(x,2 / 3) + Math.sqrt(Math.pow(x, 4 / 3) - 4 * x * x + 4)) / 2);
            first = false;
        } else {
            ctx.lineTo(oX + x, oY + (Math.pow(x,2 / 3) + Math.sqrt(Math.pow(x, 4 / 3) - 4 * x * x + 4)) / 2);
        }
    }
    for(var x = 1; x > -1; x -= step) {
        ctx.lineTo(oX + x, oY + (Math.pow(x,2 / 3) - Math.sqrt(Math.pow(x, 4 / 3) - 4 * x * x + 4)) / 2);
    }
    // ctx.closePath();
    // ctx.fill();
    ctx.stroke();
}

function DrawLove2(ctx: CanvasRenderingContext2D) {
    const delta = 120, size = 3;
    ctx.fillStyle = "#f05c5c";
    ctx.beginPath();
    ctx.moveTo(75 * size + delta, 40 * size + delta);
    ctx.bezierCurveTo(75 * size + delta, 37 * size + delta, 70 * size + delta, 25 * size + delta, 50 * size + delta, 25 * size + delta);
    ctx.bezierCurveTo(20 * size + delta, 25 * size + delta, 20 * size + delta, 62.5 * size + delta, 20 * size + delta, 62.5 * size + delta);
    ctx.bezierCurveTo(20 * size + delta, 80 * size + delta, 40 * size + delta, 102 * size + delta, 75 * size + delta, 120 * size + delta);
    ctx.bezierCurveTo(110 * size + delta, 102 * size + delta, 130 * size + delta, 80 * size + delta, 130 * size + delta, 62.5 * size + delta);
    ctx.bezierCurveTo(130 * size + delta, 62.5 * size + delta, 130 * size + delta, 25 * size + delta, 100 * size + delta, 25 * size + delta);
    ctx.bezierCurveTo(85 * size + delta, 25 * size + delta, 75 * size + delta, 37 * size + delta, 75 * size + delta, 40 * size + delta);
    ctx.fill();
}

function Test(ctx: CanvasRenderingContext2D, collaborationGraph: CollaborationGraph) {
    DrawObject(ctx, {x: 200, y: 200}, 100, 70, "Actor", "0..*");
    DrawLink(ctx, {x: 300, y: 300}, {x: 500, y: 500}, "Message", "Response");
    DrawLink(ctx, {x: 600, y: 400}, {x: 800, y: 300}, "Message", "Response");
    DrawLink(ctx, {x: 400, y: 200}, {x: 600, y: 200}, "Message", "Response");
    // DrawLove2(ctx);
}
