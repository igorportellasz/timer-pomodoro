import { createContext, ReactNode, useState, useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

// Interface para os dados necessários na criação de um novo ciclo
interface CreateCycleData {
    task: string; // Nome da tarefa do ciclo
    minutesAmount: number; // Duração do ciclo em minutos
}

// Interface que define o formato do contexto dos ciclos
interface CyclesContextType {
    cycles: Cycle[]; // Lista de ciclos registrados
    activeCycle: Cycle | undefined; // Ciclo atualmente em execução
    activeCycleId: string | null; // ID do ciclo ativo ou null se não houver ciclo ativo
    amountSecondsPassed: number; // Quantidade de segundos que passaram desde o início do ciclo ativo
    markCurrentCycleAsFinished: () => void; // Função para marcar o ciclo atual como finalizado
    setSecondsPassed: (seconds: number) => void; // Função para definir manualmente os segundos passados
    createNewCycle: (data: CreateCycleData) => void; // Função para criar um novo ciclo
    interruptCurrentCycle: () => void; // Função para interromper o ciclo atual
}

// Interface para definir as propriedades do provedor de contexto
interface CyclesContextProviderProps {
    children: ReactNode; // Componentes filhos que terão acesso ao contexto
}

// Criação do contexto de ciclos
// eslint-disable-next-line react-refresh/only-export-components
export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    // useReducer gerencia o estado global dos ciclos e inicializa a partir do localStorage, se disponível
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
            cycles: [],
            activeCycleId: null,
        },
        (initialState) => {
            // Recupera o estado salvo no localStorage para manter ciclos persistentes
            const storedStateAsJSON = localStorage.getItem(
                '@pomodoro-timer:cycles-state-1.0.0',
            );

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initialState;
        },
    );

    const { cycles, activeCycleId } = cyclesState;
    // Identifica qual ciclo está ativo com base no ID armazenado
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    // Estado para armazenar o tempo decorrido desde o início do ciclo ativo
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
        }
        return 0;
    });

    // useEffect que salva o estado atual dos ciclos no localStorage sempre que houver mudanças
    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState);
        localStorage.setItem('@pomodoro-timer:cycles-state-1.0.0', stateJSON);
    }, [cyclesState]);
    
    // Atualiza a quantidade de segundos passados no ciclo ativo
    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    // Marca o ciclo atual como finalizado, acionando uma ação no reducer
    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleAsFinishedAction());
    }

    // Cria um novo ciclo de trabalho baseado nos dados fornecidos
    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime()); // Gera um ID único com base no timestamp atual
        const newCycle: Cycle = {
            id,
            task: data.task, // Nome da tarefa
            minutesAmount: data.minutesAmount, // Duração do ciclo em minutos
            startDate: new Date(), // Marca a data e hora de início do ciclo
        };

        dispatch(addNewCycleAction(newCycle)); // Adiciona o novo ciclo ao estado global
        setAmountSecondsPassed(0); // Reseta a contagem de segundos
    }

    // Interrompe o ciclo atual antes de sua conclusão
    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction()); // Aciona a ação para interromper o ciclo ativo
    }

    return (
        // Provedor de contexto que disponibiliza os valores e funções para os componentes filhos
        <CyclesContext.Provider value={{ 
            cycles, // Lista de ciclos registrados
            activeCycle, // Ciclo atualmente em execução
            activeCycleId, // ID do ciclo ativo ou null se não houver ciclo ativo
            amountSecondsPassed, // Quantidade de segundos passados no ciclo ativo
            markCurrentCycleAsFinished, // Função para marcar o ciclo atual como finalizado
            setSecondsPassed, // Função para atualizar manualmente o tempo decorrido
            createNewCycle, // Função para criar um novo ciclo
            interruptCurrentCycle // Função para interromper o ciclo ativo
        }}>
            {children} {/* Renderiza os componentes filhos que terão acesso ao contexto */}
        </CyclesContext.Provider>  
    );
}