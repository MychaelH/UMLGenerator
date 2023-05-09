import { ArrowType, FragmentType, ParticipantType, SequenceGraph } from "@/types/sequenceGraph";
import { DrawArrowCross, DrawArrowDotted, DrawArrowHalf, DrawArrowHollow, DrawArrowSolid } from "./PhotoElements/Arrows";
import { Divider, DrawGroup } from "./PhotoElements/Fragments";
import { DrawActive, DrawActor, DrawBoundary, DrawCollections, DrawControl, DrawDatabase, DrawEntity, DrawLifeLine, DrawParticipant, DrawQueue } from "./PhotoElements/Participants";

// 绘图模块
export function SequenceDrawer(ctx: CanvasRenderingContext2D, sequenceGraph: SequenceGraph) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Test(ctx, sequenceGraph);
    for (const participant of sequenceGraph.participantList) {
        if (participant.beginPoint && participant.endPoint) {
            switch(participant.type) {
                case ParticipantType.CUSTOM: DrawParticipant(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.ACTOR: DrawActor(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.BOUNDARY: DrawBoundary(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.CONTROL: DrawControl(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.DATABASE: DrawDatabase(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.ENTITY: DrawEntity(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.COLLECTIONS: DrawCollections(ctx, participant.beginPoint, participant.name); break;
                case ParticipantType.QUEUE: DrawQueue(ctx, participant.beginPoint, participant.name); break;
                default: console.log("未知的参与者类型"); break;
            }
            DrawLifeLine(ctx, participant.beginPoint, participant.endPoint, participant.endSpot !== undefined);
        } else {
            console.log("缺少位置信息");
        }
        if (participant.activatedSegmentList) {
            for (let i = participant.activatedSegmentList.length - 1; i >= 0; i--) {
                const seg = participant.activatedSegmentList[i];
                if (seg.beginPoint && seg.endPoint) {
                    DrawActive(ctx, seg.beginPoint, seg.endPoint);
                } else {
                    console.log("缺少位置信息");
                }
            }
        }
    }
    for (const msg of sequenceGraph.messageList) {
        if (msg.beginPoint && msg.endPoint) {
            switch(msg.arrowType) {
                case ArrowType.REQUEST: DrawArrowSolid(ctx, msg.beginPoint, msg.endPoint, msg.content ?? ""); break;
                case ArrowType.RESPONSE: DrawArrowDotted(ctx, msg.beginPoint, msg.endPoint, msg.content ?? ""); break;
                case ArrowType.MESSAGE: DrawArrowHollow(ctx, msg.beginPoint, msg.endPoint, msg.content ?? ""); break;
                case ArrowType.SYNCHRONOUS: DrawArrowCross(ctx, msg.beginPoint, msg.endPoint, msg.content ?? ""); break;
                case ArrowType.ASYNCHRONOUS: DrawArrowHalf(ctx, msg.beginPoint, msg.endPoint, msg.content ?? ""); break;
                default: console.log("未知的箭头类型"); break;
            }
        } else {
            console.log("缺少位置信息");
        }
    }
    for (const fragment of sequenceGraph.fragmentList) {
        if (fragment.topY && fragment.bottomY && fragment.leftX && fragment.rightX) {
            switch(fragment.type) {
                case FragmentType.OPT:
                    DrawGroup(ctx, fragment.topY, fragment.bottomY, fragment.leftX, fragment.rightX, "opt", fragment.description);
                    break;
                case FragmentType.LOOP:
                    DrawGroup(ctx, fragment.topY, fragment.bottomY, fragment.leftX, fragment.rightX, "loop", fragment.description);
                    break;
                case FragmentType.PAR:
                    DrawGroup(ctx, fragment.topY, fragment.bottomY, fragment.leftX, fragment.rightX, "par", fragment.description);
                    break; 
                case FragmentType.ALT:
                    DrawGroup(ctx, fragment.topY, fragment.bottomY, fragment.leftX, fragment.rightX,"alt", fragment.description,
                        fragment.dividerList?.map(div => {return {y: div.y, content: div.content} as Divider}));
                    break;
                case FragmentType.REF:
                    DrawGroup(ctx, fragment.topY, fragment.bottomY, fragment.leftX, fragment.rightX, "ref", fragment.description);
                    break;
                    default: console.log("未知的片段类型"); break;
            }
        }
    }
}

function Test(ctx: CanvasRenderingContext2D, sequenceGraph: SequenceGraph) {
    let mode = "participant";
    if (mode === "arrow") {
        DrawArrowSolid(ctx, {x: 50, y: 50}, {x: 150, y: 50}, "request");
        DrawArrowDotted(ctx, {x: 150, y: 100}, {x: 50, y: 100}, "response");
        DrawArrowHollow(ctx, {x: 50, y: 150}, {x: 150, y: 150}, "message");
        DrawArrowCross(ctx, {x: 50, y: 200}, {x: 150, y: 200}, "synchronous");
        DrawArrowHalf(ctx, {x: 50, y: 250}, {x: 150, y: 250}, "asynchronous");
    }
    if (mode === "participant") {
        DrawActor(ctx, {x: 100, y: 100}, "Actor");
        DrawBoundary(ctx, {x: 200, y: 100}, "Boundary");
        DrawControl(ctx, {x: 300, y: 100}, "Control");
        DrawEntity(ctx, {x: 400, y: 100}, "Entity");
        DrawDatabase(ctx, {x: 500, y: 100}, "Database");
        DrawParticipant(ctx, {x: 630, y: 100}, "Participant");
        DrawCollections(ctx, {x: 760, y: 100}, "Collections");
        DrawQueue(ctx, {x: 890, y: 100}, "Queue");

        DrawLifeLine(ctx, {x: 100, y: 100}, {x: 100,y: 500});
        DrawLifeLine(ctx, {x: 200, y: 100}, {x: 200,y: 500});
        DrawLifeLine(ctx, {x: 300, y: 100}, {x: 300,y: 500});
        DrawLifeLine(ctx, {x: 400, y: 100}, {x: 400,y: 500});
        DrawLifeLine(ctx, {x: 500, y: 100}, {x: 500,y: 500});
        DrawLifeLine(ctx, {x: 630, y: 100}, {x: 630,y: 500});
        DrawLifeLine(ctx, {x: 760, y: 100}, {x: 760,y: 500});
        DrawLifeLine(ctx, {x: 890, y: 100}, {x: 890,y: 500});

        DrawActive(ctx, {x: 100, y: 200}, {x: 100, y: 300});
    }
    if (mode === "fragment") {
        DrawGroup(ctx, 100, 300, 100, 400, "opt", "description");
        DrawGroup(ctx, 100, 300, 500, 800, "alt", "condition1", [{y: 200, content: "condition2"}]);
    }
}
