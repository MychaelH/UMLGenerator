import { ActivityGraph, CurveType, NodeType } from "@/types/activityGraph";
import { DrawNode, DrawStart, DrawStop, DrawEnd, DrawAlt, DrawGather, DrawBar, DrawSwimlane, DrawArrow } from "./PhotoElements/Elements";


export function ActivityDrawer(ctx: CanvasRenderingContext2D, activityGraph: ActivityGraph) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Test(ctx, activityGraph);
    console.log(activityGraph);

    for (const swimlane of activityGraph.swimlaneList) {
        DrawSwimlane(ctx, swimlane.leftBorder ?? 0, swimlane.rightBorder ?? 0, swimlane.height ?? 0, swimlane.name);
    }

    for (const node of activityGraph.nodeList) {
        if (node.position) {
            switch(node.nodeType) {
                case NodeType.COMMON: DrawNode(ctx, node.position, node.content ?? ""); break;
                case NodeType.ALT: DrawAlt(ctx, node.position, node.content ?? ""); break;
                case NodeType.START: DrawStart(ctx, node.position); break;
                case NodeType.STOP: DrawStop(ctx, node.position); break;
                case NodeType.END: DrawEnd(ctx, node.position); break;
                case NodeType.GATHER: DrawGather(ctx, node.position); break;
                case NodeType.BAR: DrawBar(ctx, node.position, node.width ?? 200); break;
                default: console.log("未知的节点类型"); break;
            }
        }
    }

    for (const node of activityGraph.nodeList) {
        for (const edge of node.next) {
            if (edge.beginP && edge.endP && edge.curveType !== undefined) {
                DrawArrow(ctx, edge.beginP, edge.endP, edge.curveType, edge.content ?? '');
            }
        }
        if (node.back && node.back.beginP && node.back.endP) {
            DrawArrow(ctx, node.back.beginP, node.back.endP, CurveType.BACK, node.back.content ?? '');
        }
    }
}

function Test(ctx: CanvasRenderingContext2D, activityGraph: ActivityGraph) {
    DrawNode(ctx, {x: 100, y: 100}, "test");
    DrawStart(ctx, {x: 200, y: 100});
    DrawStop(ctx, {x: 300, y: 100});
    DrawEnd(ctx, {x: 400, y: 100});
    DrawAlt(ctx, {x: 500, y: 100}, "option");
    DrawGather(ctx, {x: 600, y: 100});
    DrawBar(ctx, {x: 200, y: 200}, 200);
    DrawSwimlane(ctx, 1000, 1300, 500, "Swimlane");
    DrawArrow(ctx, {x: 100, y: 300}, {x: 100, y: 600}, CurveType.DIRECT, "yes");
    DrawArrow(ctx, {x: 200, y: 300}, {x: 300, y: 600}, CurveType.DIRECT, "yes");
    DrawArrow(ctx, {x: 400, y: 300}, {x: 500, y: 600}, CurveType.UP, "yes");
    DrawArrow(ctx, {x: 600, y: 300}, {x: 700, y: 600}, CurveType.DOWN, "yes");
    DrawArrow(ctx, {x: 800, y: 600}, {x: 800, y: 300}, CurveType.BACK, "back");
}