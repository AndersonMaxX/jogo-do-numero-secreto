//let titulo = document.querySelector('h1');
//titulo.innerHTML = ('Jogo do número secreto');

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ('Escolha um número entre 1 e 10');
let listaDeNumerosSorteados = [];
let numeroLista = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagem() {
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10.');

}

exibirMensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;
        
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'VOCÊ ACERTOU!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Meus parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`)
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {    
        if (chute > numeroSecreto) {
                exibirTexto('p', 'O número secreto é menor!');
        } else {
                exibirTexto('p', 'O número secreto é maior!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo()
    }
}

function gerarNumero() {
    
    let numeroEscolhido = parseInt(Math.random() * numeroLista + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLista) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}