import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import * as zod from 'zod';
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../../context/CyclesContext";

// Definição do schema de validação para o formulário usando Zod
// Valida os campos de tarefa e duração do ciclo (em minutos)
const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'), // Valida que a tarefa seja informada
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 Minutos') // Valida que o ciclo tenha no mínimo 5 minutos
        .max(60, 'O ciclo precisa ser de no máximo 60 Minutos'), // Valida que o ciclo tenha no máximo 60 minutos
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    // Consome o contexto de ciclos para acessar o ciclo ativo e funções de criação e interrupção de ciclos
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

    // Configuração do hook form com validação Zod
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const { handleSubmit, watch, reset } = newCycleForm

    // Função que cria um novo ciclo com base nos dados do formulário
    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data) // Chama a função para criar o ciclo
        reset() // Reseta o formulário após criar o ciclo
    }

    // Observa o valor do campo 'task' para determinar se o botão de submit pode ser ativado
    const task = watch('task')
    const isSubmitDisabled = !task; // Desabilita o botão de submit se não houver tarefa

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm /> {/* Formulário para inserir os dados do ciclo */}
                </FormProvider>
                <Countdown /> {/* Componente para exibir a contagem regressiva do ciclo */}

                { activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} /> {/* Ícone de interrupção */}
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} /> {/* Ícone de início */}
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}
