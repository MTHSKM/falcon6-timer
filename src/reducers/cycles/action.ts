import { Cycle } from "./reducer";

export enum ActionTypes {
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE'
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function marckCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
    }
}

export function interrompCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE
    }
}