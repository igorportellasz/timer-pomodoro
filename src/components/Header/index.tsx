import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from "react-router-dom";

// Componente de cabeçalho da aplicação.
// Exibe o logo da aplicação e links de navegação com ícones para diferentes seções da aplicação.

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo da aplicação" /> 
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
