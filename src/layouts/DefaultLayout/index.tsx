import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

// Componente de layout padrão da aplicação.  
// Define uma estrutura comum para as páginas, incluindo um cabeçalho fixo e o conteúdo dinâmico das rotas.  

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}
