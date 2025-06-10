# 📚 StudiaPro

Bem-vindo ao **StudiaPro**, uma plataforma interativa que te ajuda a criar planos de estudos personalizados e a testar seus conhecimentos com quizzes gerados por inteligência artificial!

## ✨ Visão Geral

O StudiaPro é uma ferramenta poderosa para estudantes e autodidatas que buscam otimizar seu processo de aprendizagem. Com a integração da API do Groq, a plataforma oferece duas funcionalidades principais: a criação de planos de estudos detalhados para qualquer tema e a geração instantânea de quizzes para fixar o conteúdo.

## 🚀 Funcionalidades

* **Criação de Planos de Estudos Personalizados:**
    * Digite qualquer tema (ex: "Programação", "Inglês", "Design").
    * Receba um plano de estudos completo em formato de lista, estruturado para otimizar seu aprendizado.
    * Os planos são gerados dinamicamente pela IA, oferecendo flexibilidade e relevância.

* **Geração de Quizzes Interativos:**
    * Selecione um tema para o quiz.
    * Obtenha um quiz com 10 perguntas, ideal para revisar e testar seus conhecimentos.
    * Uma ótima ferramenta para autoavaliação e prática.

## 💻 Tecnologias Utilizadas

O StudiaPro foi construído com as seguintes tecnologias modernas:

* **Next.js:** Um framework React para desenvolvimento de aplicações web robustas e escaláveis.
* **TypeScript:** Uma linguagem que adiciona tipagem estática ao JavaScript, melhorando a qualidade e manutenibilidade do código.
* **Sass (Syntactically Awesome Style Sheets):** Um pré-processador CSS que permite usar variáveis, aninhamento e outras funcionalidades avançadas para um CSS mais organizado e eficiente.
* **Groq API:** Utilizada para processamento de linguagem natural, gerando os planos de estudos e as perguntas dos quizzes com base nos prompts fornecidos.

## 💡 Como Usar (Para Usuários Finais)

1.  **Acessar a Plataforma:**
    * Visite o StudiaPro em: [https://studiapro.vercel.app](https://studiapro.vercel.app)

2.  **Gerar um Plano de Estudos:**
    * Na seção "Crie seu plano de estudos", digite o tema desejado no campo de texto.
    * Clique no botão "Gerar Plano".
    * Aguarde alguns instantes e seu plano de estudos personalizado será exibido.

3.  **Fazer um Quiz:**
    * Na seção "Vamos fazer um Quiz?", selecione ou digite o tema do quiz.
    * Clique no botão "Iniciar Quiz".
    * Responda às 10 perguntas para testar seus conhecimentos.

## ⚙️ Instalação e Execução (Para Desenvolvedores)

Se você deseja rodar este projeto em sua máquina local para desenvolvimento ou estudo, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

* [Node.js (versão 18 ou superior recomendada)](https://nodejs.org/en/download/)

### Passos de Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone `https://github.com/pedroferreirasousa/Plataforma-de-Estudos-com-IA.git`
    ```
    * **Nota:** Lembre-se de substituir `[URL_DO_SEU_REPOSITORIO_AQUI]` pela URL real do seu repositório Git (ex: `https://github.com/seu-usuario/studiapro.git`).

2.  **Instale as Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configurar Variáveis de Ambiente:**
    * Crie um arquivo `.env.local` na raiz do projeto.
    * Você precisará de uma chave de API da Groq para que o projeto funcione.
    * Adicione a seguinte linha ao seu arquivo `.env.local`:
        ```
        NEXT_PUBLIC_GROQ_API_KEY=sua_chave_da_groq_aqui
        ```
    * Substitua `sua_chave_da_groq_aqui` pela sua chave real da Groq API. Você pode obtê-la em [https://console.groq.com/](https://console.groq.com/).

4.  **Rodar o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  **Acessar no Navegador:**
    * Abra seu navegador e acesse `http://localhost:3000` (ou a porta indicada pelo seu terminal).

## 📧 Contato

* **Pedro Ferreira**
* **LinkedIn:** `https://www.linkedin.com/in/pedrofsousa`
* **GitHub:** `https://github.com/pedroferreirasousa`
