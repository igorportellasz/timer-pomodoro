import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import { useContext } from "react";
import { CyclesContext } from "../../../../context/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm () {
    // Obtém o ciclo ativo do contexto, caso exista
    const { activeCycle } = useContext(CyclesContext);
    
    // Obtém o método 'register' do React Hook Form para registrar os inputs
    const { register } = useFormContext();

    return (
        <FormContainer>
            {/* Label e campo para a tarefa */}
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
                id="task" 
                list="task-suggestions"  // Sugestões para a tarefa
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}  // Desabilita o campo se houver um ciclo ativo
                {...register('task')}  // Registra o campo no React Hook Form
            />
        
            {/* Lista de sugestões para tarefas */}
            <datalist id="task-suggestions">
                <option value="Estudar"/>
                <option value="Trabalhar"/>
                <option value="Jogar"/>
            </datalist>
        
            {/* Label e campo para a duração em minutos */}
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                disabled={!!activeCycle}  // Desabilita o campo se houver um ciclo ativo
                step={5}  // Aumenta/decrementa o valor em múltiplos de 5
                min={5}  // Valor mínimo de 5 minutos
                max={60}  // Valor máximo de 60 minutos
                {...register('minutesAmount', { valueAsNumber: true })}  // Registra o campo e transforma o valor em número
            />
        
            {/* Exibe o texto fixo de minutos */}
            <span>minutos.</span>
        </FormContainer>
    )
}
