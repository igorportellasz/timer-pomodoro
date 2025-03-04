import styled from 'styled-components'

// Componente de estilo que define o layout do cabeçalho da aplicação.
// Utiliza flexbox para organizar o logo e os links de navegação de forma responsiva.

export const HeaderContainer = styled.header`
    display: flex; /* Utiliza flexbox para alinhar os itens horizontalmente */
    align-items: center; /* Alinha os itens no eixo vertical */
    justify-content: space-between; /* Distribui os itens com espaçamento entre eles */

    img {
        width: 5rem; /* Define o tamanho do logo */
        height: 5rem; /* Define a altura do logo */
    }

    nav {
        display: flex; /* Organiza os links de navegação em uma linha */
        gap: 0.5rem; /* Espaçamento entre os links */

        a {
            width: 3rem; /* Largura dos links */
            height: 3rem; /* Altura dos links */

            display: flex; /* Utiliza flexbox para alinhar os ícones no centro */
            justify-content: center; /* Alinha o conteúdo horizontalmente */
            align-items: center; /* Alinha o conteúdo verticalmente */

            color: ${(props) => props.theme['gray-100']}; /* Cor do texto dos links */
            
            border-top: 3px solid transparent; /* Estilo de borda superior */
            border-bottom: 3px solid transparent; /* Estilo de borda inferior */

            &:hover {
                border-bottom: 3px solid ${(props) => props.theme['green-500']}; /* Altera a borda inferior ao passar o mouse */
            }

            &.active {
                color: ${(props) => props.theme['green-500']}; /* Altera a cor do link ativo */
            }
        }
    }
`
