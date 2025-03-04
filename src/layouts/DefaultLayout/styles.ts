import styled from 'styled-components';

// Componente de estilo que define a estrutura e aparência do layout.
// Utilizado para criar um container flexível que organiza os elementos da página com o estilo adequado.

export const LayoutContainer = styled.div`
    max-width: 74rem; // Define a largura máxima do layout
    height: calc(100vh - 10rem); // Define a altura do layout, subtraindo 10rem para compensar o cabeçalho ou outros elementos fixos
    margin: 5rem auto; // Adiciona uma margem superior de 5rem e centraliza o layout horizontalmente
    padding: 2.5rem; // Aplica padding interno de 2.5rem

    background-color: ${(props) => props.theme['gray-800']}; // Define a cor de fundo utilizando o tema
    border-radius: 8px; // Adiciona bordas arredondadas com raio de 8px

    display: flex; // Utiliza o modelo de layout flexbox
    flex-direction: column; // Organiza os elementos filhos em coluna
`;
