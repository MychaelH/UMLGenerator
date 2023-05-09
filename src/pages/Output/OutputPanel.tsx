import { useGlobal } from "@/global";
import { SequenceCompile } from "@/utils/SequenceGenerator/SequenceComplier";
import { Button, InputRef } from "antd";
import { Input } from 'antd';
import React from "react";
import styles from './OutputPanel.module.less';
import { useEffect, useRef, useState } from "react";
import { SequenceDrawer } from "@/utils/SequenceGenerator/SequenceDrawer";
import { SequenceLayout } from "@/utils/SequenceGenerator/SequenceLayouter";
import { CollaborationLayout } from "@/utils/CollaborationGenerator/CollaborationLayouter";
import { CollaborationDrawer } from "@/utils/CollaborationGenerator/CollaborationDrawer";
import { ActivityLayout } from "@/utils/ActivityGenerator/ActivityLayouter";
import { ActivityDrawer } from "@/utils/ActivityGenerator/ActivityDrawer";
import { StateDrawer } from "@/utils/StateGenerator/StateDrawer";
import { StateLayout } from "@/utils/StateGenerator/StateLayouter";

type Props = {}

const OutputPanel: React.FC<Props> = ({

}) => {
    const [global, setGlobal] = useGlobal();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() =>{
        if (canvasRef.current && global.sequenceGraph && global.mode === "0"){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const sequenceGraph = SequenceLayout(ctx, global.sequenceGraph);
                if (sequenceGraph) {
                    SequenceDrawer(ctx, sequenceGraph);
                }
            }
        }
        if (canvasRef.current && global.collaborationGraph && global.mode === "1") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const collaborationGraph = CollaborationLayout(ctx, global.collaborationGraph);
                if (collaborationGraph) {
                    CollaborationDrawer(ctx, collaborationGraph);
                }
            }
        }
        if (canvasRef.current && global.stateGraph && global.mode === "2") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const stateGraph = StateLayout(ctx, global.stateGraph);
                if (stateGraph) {
                    StateDrawer(ctx, stateGraph);
                }
            }
        }
        if (canvasRef.current && global.activityGraph && global.mode === "3") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const activityGraph = ActivityLayout(ctx, global.activityGraph);
                if (activityGraph) {
                    ActivityDrawer(ctx, activityGraph);
                }
            }
        }
    }, [global])
    
    return (
        <div>
            <div>输出区域</div>
            <canvas className={styles.panel} ref={canvasRef} width={1625} height={1500}>
                Your browser does not support the canvas element.
            </canvas>
        </div>
    );
}

export default OutputPanel;
