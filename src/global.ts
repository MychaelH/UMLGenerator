import { useCallback, useEffect, useState } from "react";
import { ActivityGraph } from "./types/activityGraph";
import { CollaborationGraph } from "./types/collaborationGraph";
import { SequenceGraph } from "./types/sequenceGraph";
import { StateGraph } from "./types/stateGraph";

export type AnyToVoidFunction = (...args: any[]) => void;

export function useForceUpdate() {
    const [, setTrigger] = useState(false);
  
    return useCallback(() => {
      setTrigger(trigger => !trigger);
    }, []);
  }

export type GlobalState = {
    mode: string;
    sequenceGraph?: SequenceGraph;
    collaborationGraph?: CollaborationGraph;
    activityGraph?: ActivityGraph;
    stateGraph?: StateGraph;
};

export const defaultGlobalState: GlobalState = {
    mode: "0",
};

let _globalState = defaultGlobalState;

const _forceUpdateList: AnyToVoidFunction[] = [];

export const getGlobalState: () => GlobalState = () => _globalState;

export const setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>> = v => {
    if (typeof v === 'function') {
        _globalState = v(_globalState);
    } else {
        _globalState = v;
    }
    _forceUpdateList.forEach(f => f());
};

export function useGlobal(): readonly [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>] {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        _forceUpdateList.push(forceUpdate);
        return () => {
        const index = _forceUpdateList.indexOf(forceUpdate);
        if (index > -1) {
            _forceUpdateList.splice(index, 1);
        }
        };
    }, []);

    return [_globalState, setGlobalState] as const;
}