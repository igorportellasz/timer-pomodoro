import { ActionTypes } from "./actions";  // Importa os tipos de ação definidos anteriormente
import { produce } from "immer";  // Importa a função `produce` da biblioteca `immer` para manipulação imutável do estado

// Definição do tipo de dados de um ciclo
export interface Cycle {
    id: string;  // ID único do ciclo
    task: string;  // Tarefa do ciclo
    minutesAmount: number;  // Duração do ciclo em minutos
    startDate: Date;  // Data de início do ciclo
    interruptedDate?: Date;  // Data de interrupção (se houver)
    finishedDate?: Date;  // Data de conclusão (se houver)
}

// Estado dos ciclos, que contém a lista de ciclos e o ciclo ativo
interface CyclesState {
    cycles: Cycle[];  // Lista de ciclos
    activeCycleId: string | null;  // ID do ciclo ativo, ou null caso não haja ciclo ativo
}

// Função reducer que manipula as ações de ciclos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        // Ação para adicionar um novo ciclo
        case ActionTypes.ADD_NEW_CYCLE: {
            return produce(state, draft => {
                // Adiciona o novo ciclo à lista de ciclos
                draft.cycles.push(action.payload.newCycle);
                // Define o novo ciclo como o ciclo ativo
                draft.activeCycleId = action.payload.newCycle.id;
            });
        }

        // Ação para interromper o ciclo atual
        case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            // Encontra o índice do ciclo ativo na lista de ciclos
            const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId);

            // Se não houver ciclo ativo, retorna o estado atual
            if (currentCycleIndex < 0) {
                return state;
            }

            // Atualiza o estado com a interrupção do ciclo ativo
            return produce(state, draft => {
                draft.activeCycleId = null;  // Remove o ciclo ativo
                // Define a data de interrupção do ciclo
                draft.cycles[currentCycleIndex].interruptedDate = new Date();
            });
        }

        // Ação para marcar o ciclo atual como finalizado
        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
            // Encontra o índice do ciclo ativo na lista de ciclos
            const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId);

            // Se não houver ciclo ativo, retorna o estado atual
            if (currentCycleIndex < 0) {
                return state;
            }

            // Atualiza o estado com a finalização do ciclo ativo
            return produce(state, draft => {
                draft.activeCycleId = null;  // Remove o ciclo ativo
                // Define a data de finalização do ciclo
                draft.cycles[currentCycleIndex].finishedDate = new Date();
            });
        }

        // Caso nenhuma ação corresponda
        default:
            return state;
    }
}
