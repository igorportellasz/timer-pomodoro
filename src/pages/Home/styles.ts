import styled from "styled-components";

// Container principal para a página inicial.
// Organiza os itens (como o formulário) centralizados na tela.
export const HomeContainer = styled.main`
    flex: 1; /* Faz o container ocupar o restante do espaço disponível */
    display: flex;
    flex-direction: column; /* Organiza os itens na vertical */
    align-items: center; /* Centraliza os itens horizontalmente */
    justify-content: center; /* Centraliza os itens verticalmente */

    form {
        display: flex;
        flex-direction: column; /* Organiza os elementos do formulário na vertical */
        align-items: center; /* Centraliza os itens do formulário */
        gap: 3.5rem; /* Define o espaçamento entre os elementos do formulário */
    }
`;

// Estilo base para os botões de contagem regressiva (iniciar e interromper).
// Define a aparência comum entre os botões e pode ser extendido para botões específicos.
const BaseCountdownButton = styled.button`
    width: 100%; /* Faz o botão ocupar toda a largura disponível */
    border: 0; /* Remove a borda */
    padding: 1rem; /* Adiciona um padding ao botão */
    border-radius: 8px; /* Define bordas arredondadas */
    
    display: flex; /* Utiliza flexbox para organizar os ícones e o texto */
    align-items: center; /* Alinha os itens verticalmente */
    justify-content: center; /* Alinha os itens horizontalmente */
    
    gap: 0.5rem; /* Espaçamento entre o ícone e o texto */
    font-weight: bold; /* Define o texto em negrito */
    
    color: ${props => props.theme["gray-100"]}; /* Cor do texto do botão */
    
    cursor: pointer; /* Aplica o cursor de ponteiro ao passar o mouse */
    
    &:disabled {
        opacity: 0.7; /* Reduz a opacidade do botão quando desabilitado */
        cursor: not-allowed; /* Aplica o cursor de "não permitido" quando desabilitado */
    }
`

// Botão para iniciar a contagem regressiva.
// Extende o botão base e aplica uma cor de fundo verde, com hover em verde mais escuro.
export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme["green-500"]}; /* Cor de fundo do botão */

    &:disabled {
        opacity: 0.7; /* Aplica a opacidade reduzida quando desabilitado */
        cursor: not-allowed; /* Aplica o cursor de "não permitido" quando desabilitado */
    }

    &:not(:disabled):hover {
        background: ${props => props.theme["green-700"]}; /* Cor de fundo ao passar o mouse (hover) */
    }
`

// Botão para interromper a contagem regressiva.
// Extende o botão base e aplica uma cor de fundo vermelha, com hover em vermelho mais escuro.
export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme["red-500"]}; /* Cor de fundo do botão */
    
    &:not(:disabled):hover {
        background: ${props => props.theme["red-700"]}; /* Cor de fundo ao passar o mouse (hover) */
    }
`
