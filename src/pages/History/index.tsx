import { useContext } from "react"
import { HistoryContainer, HistoryListContainer, StatusComponent } from "./styles"
import { CycleContext } from "../../contexts/CyclesContext"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function History() {
    const { cycles } = useContext(CycleContext)

    return (
        <>
            <HistoryContainer>
                <h1>Meu histórico</h1>

                <HistoryListContainer>
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
                            {cycles.map((cycle) => {
                                return (
                                    <tr key={cycle.id}>
                                        <td>{cycle.task}</td>
                                        <td>{cycle.minutesAmount} minutos</td>
                                        <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                            addSuffix: true,
                                            locale: ptBR,
                                        })}</td>
                                        <td>
                                            {cycle.finishedDate && (
                                                <StatusComponent $statuscolor="green">Concluido</StatusComponent>
                                            )}

                                            {cycle.interruptedDate && (
                                                <StatusComponent $statuscolor="red">Interrompido</StatusComponent>
                                            )}

                                            {!cycle.finishedDate && !cycle.interruptedDate && (
                                                <StatusComponent $statuscolor="yellow">Em Andamento</StatusComponent>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </HistoryListContainer>
            </HistoryContainer>
        </>
    )
}