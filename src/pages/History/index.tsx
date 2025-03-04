import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { formatDistanceToNow } from 'date-fns';  // Função para formatar o tempo desde o início do ciclo
import { ptBR } from 'date-fns/locale/pt-BR';  // Localização para o idioma português (Brasil)

export function History() {
    // Acessando o contexto de ciclos que contém todos os ciclos registrados
    const { cycles } = useContext(CyclesContext);

    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1> 
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cycles.map(cycle => {
                            return (
                                <tr key={cycle.id}>  {/* A chave é o ID único do ciclo */}
                                    <td>{cycle.task}</td>  {/* Nome da tarefa */}
                                    <td>{cycle.minutesAmount} minutos</td>  {/* Duração do ciclo em minutos */}
                                    <td>
                                        {/* Exibe o tempo desde o início do ciclo, com a data formatada no formato amigável em português */}
                                        {formatDistanceToNow(new Date(cycle.startDate), {
                                            addSuffix: true,
                                            locale: ptBR,
                                        })}
                                    </td>
                                    <td>
                                        {/* Exibe o status do ciclo com base nas datas de finalização ou interrupção */}
                                        {cycle.finishedDate && (
                                            <Status statusColor="green">Concluído</Status>
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status statusColor="red">Interrompido</Status>
                                        )}

                                        {!cycle.finishedDate && !cycle.interruptedDate && (
                                            <Status statusColor="yellow">Em Andamento</Status>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}
