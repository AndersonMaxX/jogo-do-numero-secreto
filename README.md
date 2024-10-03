# JS Game 🎮

Bem-vindo ao **JS Game**! Este é um jogo interativo onde o jogador tenta adivinhar um número aleatório gerado pelo sistema. O jogo foi criado utilizando HTML, CSS e JavaScript.

## 🎯 Objetivo do Jogo

Você deve adivinhar um número entre 1 e 10. O sistema informa se o chute foi correto ou não, e você pode tentar quantas vezes quiser. Após acertar o número ou decidir parar, você pode iniciar um novo jogo.

## 🚀 Tecnologias Utilizadas

-   **HTML5** para estrutura da página.
-   **CSS3** para estilização e layout responsivo.
-   **JavaScript** para a lógica do jogo.
-   **ResponsiveVoice.js** para síntese de voz (opcional, usado para interatividade).

## 📋 Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

1.  **Clone o repositório**
    
    ```         
    bash                                                                                 Copiar código
    
    git clone https://github.com/seu-usuario/js-game.git
    cd js-game 
    ```
2.  **Abra o arquivo `index.html` no navegador**
    
    Não é necessário configurar nenhum servidor. Basta abrir o arquivo `index.html` diretamente em um navegador.
    
3.  **Comece a Jogar!**
    
    O número secreto será gerado automaticamente, e você pode começar a fazer seus palpites!
    

## 🕹️ Como Jogar

1.  Digite um número entre **1** e **10** no campo de entrada.
2.  Clique no botão **Chutar** para enviar sua tentativa.
3.  O jogo te dará um feedback se o seu chute está correto.
4.  Caso deseje iniciar um novo jogo, clique no botão **Novo Jogo** (ele será habilitado após o término de uma rodada).

## 📄 Estrutura do Projeto




```
plaintext                                                                                 Copiar código

├── img/
│   └── ia.png               # Imagem utilizada no jogo
├── style.css                # Estilos personalizados do jogo
├── app.js                   # Arquivo JS contendo a lógica do jogo
└── index.html               # Página HTML principal
``` 

## 📚 Funcionalidades

-   **Entrada de Chute**: O jogador digita um número entre 1 e 10.
-   **Feedback ao Jogador**: O jogo informa se o chute está certo ou não.
-   **Novo Jogo**: Reinicie o jogo clicando no botão "Novo jogo".
-   **Responsividade**: O layout do jogo se ajusta para diferentes tamanhos de tela.

## 🌐 Fonte de Voz (Opcional)

Utilizamos a API da [ResponsiveVoice](https://responsivevoice.org/) para síntese de voz. Ela pode ser integrada ao jogo para fornecer respostas faladas ao jogador.

## 📦 Dependências

-   Nenhuma dependência adicional precisa ser instalada. Todo o código está pronto para uso local.

## 👩‍💻 Contribuições

Sinta-se à vontade para abrir issues ou fazer pull requests para melhorias e novas funcionalidades!
