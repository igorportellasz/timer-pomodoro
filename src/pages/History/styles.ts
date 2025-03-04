import styled from "styled-components";

// Container principal para o histórico de ciclos
export const HistoryContainer = styled.main`
    flex: 1;  // Define o comportamento do container no layout flexível
    padding: 3.5rem;  // Espaçamento interno

    display: flex;
    flex-direction: column;  // Organiza os itens do container em coluna

    h1 {
        font-size: 1.5rem;  // Tamanho da fonte do título
        color: ${props => props.theme["gray-100"]};  // Cor do texto do título, vem do tema
    }
`;

// Contêiner que envolve a lista de históricos (tabela)
export const HistoryList = styled.div`
    flex: 1;  // Permite que o elemento ocupe o máximo possível de espaço
    overflow: auto;  // Permite rolagem caso a tabela ultrapasse o tamanho da tela
    margin-top: 2rem;  // Espaço acima da lista

    table {
        width: 100%;  // A tabela ocupa 100% da largura do contêiner
        border-collapse: collapse;  // Remove espaços entre as bordas da tabela
        min-width: 600px;  // Largura mínima da tabela

        th {
            background-color: ${props => props.theme["gray-600"]};  // Cor de fundo do cabeçalho
            padding: 1rem;  // Espaçamento interno nas células do cabeçalho
            text-align: left;  // Alinhamento do texto no cabeçalho
            color: ${props => props.theme["gray-100"]};  // Cor do texto
            font-size: 0.875rem;  // Tamanho da fonte
            line-height: 1.6;  // Espaçamento entre as linhas de texto

            &:first-child {
                border-top-left-radius: 8px;  // Arredonda o canto superior esquerdo
                padding-left: 1.5rem;  // Adiciona espaçamento extra à esquerda da primeira célula
            }

            &:last-child {
                border-top-right-radius: 8px;  // Arredonda o canto superior direito
                padding-right: 1.5rem;  // Adiciona espaçamento extra à direita da última célula
            }
        }

        td {
            background-color: ${props => props.theme["gray-700"]};  // Cor de fundo das células
            border-top: 4px solid ${props => props.theme["gray-800"]};  // Borda superior entre as células
            padding: 1rem;  // Espaçamento interno das células
            font-size: 0.875rem;  // Tamanho da fonte
            line-height: 1.6;  // Espaçamento entre as linhas de texto

            &:first-child {
                width: 50%;  // Define a largura da primeira coluna
                padding-left: 1.5rem;  // Adiciona espaçamento extra à esquerda da primeira célula
            }

            &:last-child {
                padding-right: 1.5rem;  // Adiciona espaçamento extra à direita da última célula
            }
        }
    }
`;

// Cores possíveis para o status de cada ciclo
const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const;

// Interface para definir o tipo de cor para o status
interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;  // Aceita uma chave de 'STATUS_COLORS'
}

// Componente que exibe o status de um ciclo (Concluído, Interrompido, Em andamento)
export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;  // Tamanho do ponto de status
        height: 0.5rem;  // Tamanho do ponto de status
        border-radius: 9999px;  // Faz o ponto ser redondo
        background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};  // Cor do ponto, dependendo do status
    }
`
