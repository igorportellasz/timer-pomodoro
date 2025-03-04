import { createGlobalStyle } from "styled-components";

// Definição de estilos globais para a aplicação utilizando Styled Components.
// Isso garante que todos os elementos tenham estilos consistentes e padronizados.

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Remove o contorno padrão de elementos focados e adiciona um contorno personalizado
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
    }

    // Define o fundo e a cor padrão do texto da aplicação com base no tema
    body {
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased; // Melhora a renderização das fontes em navegadores WebKit
    }

    // Define a fonte padrão para os elementos de texto e interação
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
