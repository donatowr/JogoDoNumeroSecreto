let listaSorteados = [];
let numeroLimite = 10;
mensagemInicia();

let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let exibir = document.querySelector(tag);
    exibir.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function mensagemInicia() {

    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10 ');
}

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = (tentativas == 1 ? 'tentativa' : 'tentativas');

        let mensagemTentativas = `Parabéns você descobriu o numero Secreto com  ${tentativas} ${palavraTentativa}!!!`
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O numero Secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O numero Secreto é menor');
        }
        tentativas++;
        limparCampo();
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let qtdNumerosSorteados = listaSorteados.length;
    
    if (qtdNumerosSorteados == numeroLimite) {
        listaSorteados = [];
    }

    if (listaSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorios();
    } else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    mensagemInicia();
    numeroSecreto = gerarNumAleatorio();
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}