import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// Extende a tipagem do módulo 'styled-components' para incluir o tema da aplicação.
// Isso permite que o ThemeProvider reconheça corretamente as propriedades do defaultTheme.

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { _?: never; }
}
