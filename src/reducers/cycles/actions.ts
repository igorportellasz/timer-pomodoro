import { Cycle } from "./reducer";

// Enum para definir os tipos de ação relacionados aos ciclos
export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',  // Ação para adicionar um novo ciclo
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',  // Ação para interromper o ciclo atual
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',  // Ação para marcar o ciclo atual como finalizado
}

// Função para adicionar um novo ciclo
export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,  // Tipo da ação
        payload: {
            newCycle,  // O novo ciclo que será adicionado ao estado
        }
    }
}

// Função para marcar o ciclo atual como finalizado
export function markCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,  // Tipo da ação
    }
}

// Função para interromper o ciclo atual
export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,  // Tipo da ação
    }
}
