import styled from 'styled-components';

// Container que envolve o cronômetro (tempo restante)
export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;  // Fonte monoespaçada para um visual de terminal
    font-size: 10rem;  // Tamanho grande da fonte para exibição do tempo
    line-height: 8rem;  // Espaçamento entre as linhas, ajustando o alinhamento vertical
    color: ${props => props.theme["gray-100"]};  // Cor do texto, definida pelo tema

    display: flex;  // Organiza os elementos internos de forma flexível
    gap: 1rem;  // Espaçamento entre os elementos internos

    span {
        background: ${props => props.theme["gray-700"]};  // Cor de fundo para cada número, do tema
        padding: 2rem 1rem;  // Espaçamento interno para dar tamanho ao número
        border-radius: 8px;  // Borda arredondada
    }
`;

// Separador ":" entre minutos e segundos
export const Separator = styled.div`
    padding: 2rem 0;  // Espaçamento interno vertical
    color: ${props => props.theme["green-500"]};  // Cor verde para o separador, definida pelo tema

    width: 4rem;  // Largura fixa do separador
    overflow: hidden;  // Impede que o conteúdo ultrapasse a largura definida
    display: flex;  // Utiliza o modelo flexbox para posicionamento
    justify-content: center;  // Centraliza o conteúdo dentro do separador
`
