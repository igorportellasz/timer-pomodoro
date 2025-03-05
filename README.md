# Timer Pomodoro

Este é um projeto de um Timer Pomodoro desenvolvido utilizando **JavaScript**, **TypeScript**, **React** e outras ferramentas modernas. O objetivo é auxiliar na gestão de tempo, dividindo o trabalho em ciclos de foco e descanso.

## Tecnologias Utilizadas

- **JavaScript** - Linguagem principal do projeto
- **TypeScript** - Para tipagem estática e segurança do código
- **React** - Biblioteca para construção da interface
- **Vite** - Ferramenta de build rápida e eficiente
- **ESLint** - Para garantir a qualidade do código

## Bibliotecas Usadas

- `styled-components` - Para estilização com CSS-in-JS
- `react-router-dom` - Para navegação entre páginas
- `immer` - Manipulação imutável de estado
- `date-fns` - Manipulação de datas
- `react-hook-form` - Gerenciamento de formulários
- `phosphor-react` - Ícones personalizáveis
- `zod` - Validação de dados
- `@hookform/resolvers` - Integração entre React Hook Form e Zod

## Funcionalidades

- **Iniciar o Timer** - Contagem regressiva baseada na técnica Pomodoro, permitindo definir o tempo de cada ciclo.
- **Interromper o Timer** - Possibilidade de pausar ou cancelar um ciclo em andamento.
- **Histórico de Ciclos** - Exibição dos últimos ciclos realizados, indicando tempos concluídos e interrompidos.
- **Gerenciamento de Estados** - Estado global gerenciado para garantir que os ciclos sejam mantidos corretamente.
- **Feedback Visual** - Interface intuitiva com mudanças visuais para cada estado do timer.

## Instalação e Execução

Para clonar e rodar o projeto localmente, siga os passos abaixo:

```sh
# Clone o repositório
git clone https://github.com/igorportellasz/timer-pomodoro.git

# Acesse a pasta do projeto
cd timer-pomodoro

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Estrutura do Projeto

```
/timer-pomodoro
│── src/             # Código-fonte do projeto
│   │── components/  # Componentes reutilizáveis
│   │── contexts/    # Context API para gerenciamento de estado
│   │── hooks/       # Hooks personalizados
│   │── pages/       # Páginas principais do app
│   │── reducers/    # Gerenciamento de estado com reducers
│   │── styles/      # Estilos globais
│── .eslintrc.json   # Configuração do ESLint
│── .gitignore       # Arquivos ignorados pelo Git
│── index.html       # Arquivo principal HTML
│── package.json     # Dependências e scripts do projeto
│── tsconfig.json    # Configuração do TypeScript
│── vite.config.ts   # Configuração do Vite
```

---

📌 Este projeto foi desenvolvido baseado no curso da **Rocketseat** ministrado por **Diego Fernandes**.

