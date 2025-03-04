import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";  // Função para calcular a diferença em segundos
import { CyclesContext } from "../../../../context/CyclesContext";  // Contexto que gerencia os ciclos

export function Countdown() {
    // Desestruturando as variáveis e funções do contexto CyclesContext
    const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext);

    // Calculando o total de segundos do ciclo ativo
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    useEffect(() => {
        let interval: number;

        // Se houver um ciclo ativo, inicia um intervalo para contar os segundos
        if (activeCycle) {
            interval = setInterval(() => {
                // Calculando a diferença em segundos entre o momento atual e o início do ciclo
                const secondsDifference = differenceInSeconds(
                    new Date(), 
                    new Date(activeCycle.startDate),  // Data de início do ciclo ativo
                );

                // Se a diferença de segundos for maior ou igual ao total de segundos do ciclo, marca o ciclo como finalizado
                if (secondsDifference >= totalSeconds) {
                    markCurrentCycleAsFinished();  // Finaliza o ciclo
                    setSecondsPassed(totalSeconds);  // Define os segundos passados como o total do ciclo

                    clearInterval(interval);  // Limpa o intervalo
                } else {
                    setSecondsPassed(secondsDifference);  // Atualiza os segundos passados
                }
            }, 1000);  // Intervalo de 1 segundo
        }

        return () => {
            clearInterval(interval);  // Limpa o intervalo quando o componente for desmontado ou o ciclo for alterado
        };
    }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);  // Reexecuta quando qualquer uma dessas dependências mudar

    // Calculando os minutos e segundos restantes
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
    const minutesAmount = Math.floor(currentSeconds / 60);  // Convertendo os segundos para minutos
    const secondsAmount = currentSeconds % 60;  // Calculando os segundos restantes

    // Formatando minutos e segundos para sempre terem 2 dígitos
    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');
    
    useEffect(() => {
        // Alterando o título da aba do navegador para mostrar o tempo restante
        if (activeCycle) {
            document.title = `${minutes} : ${seconds}`;
        }
    }, [minutes, seconds, activeCycle]);  // Reexecuta quando minutos ou segundos mudarem

    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span> 
            <Separator>:</Separator> 
            <span>{seconds[0]}</span> 
            <span>{seconds[1]}</span>
        </CountdownContainer>
    );
}
