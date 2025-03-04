import styled from 'styled-components'

// Contêiner do formulário, centraliza e organiza os itens em linha
export const FormContainer = styled.div `
    width: 100%;  // O formulário ocupa toda a largura disponível
    display: flex;  // Usa o layout flexbox
    align-items: center;  // Alinha os itens no centro verticalmente
    justify-content: center;  // Alinha os itens no centro horizontalmente
    gap: 0.5rem;  // Espaçamento entre os itens
    color: ${props => props.theme["gray-100"]};  // Cor do texto
    font-size: 1.125rem;  // Tamanho da fonte
    font-weight: bold;  // Fonte em negrito
    flex-wrap: wrap;  // Permite que os itens se quebrem em várias linhas, se necessário
`

// Estilo base para os inputs, com borda inferior e personalização de foco
const BaseInput = styled.input `
    background: transparent;  // Sem fundo
    height: 2.5rem;  // Altura do campo de entrada
    border: 0;  // Sem borda
    border-bottom: 2px solid ${props => props.theme["gray-500"]};  // Borda inferior com cor cinza
    font-weight: bold;  // Fonte em negrito
    font-size: 1.125rem;  // Tamanho da fonte
    padding: 0 0.5rem;  // Espaçamento interno lateral
    color: ${props => props.theme["gray-100"]};  // Cor do texto

    // Estilo de foco, altera a borda para verde
    &:focus {
        box-shadow: none;  // Remove sombra ao focar
        border-color: ${props => props.theme["green-500"]};  // Borda verde quando focado
    }

    // Estilo do placeholder
    &::placeholder {
        color: ${props => props.theme["gray-500"]};  // Cor do texto do placeholder
    }
`

// Campo de entrada para a tarefa, com flex para ocupar todo o espaço disponível
export const TaskInput = styled(BaseInput) `
    flex: 1;  // Faz o campo ocupar o espaço restante
    &::-webkit-calendar-picker-indicator {
        display: none !important;  // Remove o ícone de abrir lista de sugestões
    }
`

// Campo de entrada para a quantidade de minutos, com largura fixa
export const MinutesAmountInput = styled(BaseInput) `
    width: 4rem;  // Largura fixa para o campo de minutos
`
