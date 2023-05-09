import { NodeType, StateGraph } from "@/types/stateGraph";
import { DrawStart, DrawStop, DrawChoice, DrawNode, DrawLink } from "./PhotoElements/Elements";


export function StateDrawer(ctx: CanvasRenderingContext2D, stateGraph: StateGraph) {
    console.log(stateGraph);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //Test(ctx, stateGraph);

    for (const node of stateGraph.nodeList) {
        if (node.position && node.width && node.height){
            switch(node.nodeType) {
                case NodeType.COMMON: DrawNode(ctx, {x: node.position.x - node.width / 2, y: node.position.y - node.height / 2}, node.width, node.height, node.name, node.content); break;
                case NodeType.CHOICE: DrawChoice(ctx, node.position); break;
                case NodeType.START: DrawStart(ctx, node.position); break;
                case NodeType.STOP: DrawStop(ctx, node.position); break;
                default: break;
            }
        }
    }

    for (const link of stateGraph.linkList) {
        if (link.beginP && link.endP) {
            DrawLink(ctx, link.beginP, link.endP, link.content);
        }
    }
}

function Test(ctx: CanvasRenderingContext2D, stateGraph: StateGraph) {
    DrawStart(ctx, {x: 200, y: 100});
    DrawStop(ctx, {x: 300, y: 100});
    DrawChoice(ctx, {x: 400, y: 100});
    DrawNode(ctx, {x: 500, y: 100}, 300, 200, "node", "This is a description");
    DrawNode(ctx, {x: 900, y: 100}, 100, 70, "node");
    DrawLink(ctx, {x: 200 , y: 300}, {x: 400, y: 500}, "link");
    DrawLink(ctx, {x: 500 , y: 500}, {x: 700, y: 500}, "link");
}