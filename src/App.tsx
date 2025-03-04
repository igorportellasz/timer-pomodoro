import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CyclesContext'

// Componente principal da aplicação.  
// Configura o tema global, o roteamento e o contexto de ciclos, garantindo que todas as páginas tenham acesso a essas funcionalidades.  

export function App() {
   return (
      <ThemeProvider theme={defaultTheme}>
         <BrowserRouter>
            <CyclesContextProvider>
               <Router />
            </CyclesContextProvider>
         </BrowserRouter>
         <GlobalStyle />
      </ThemeProvider>
   )
}
