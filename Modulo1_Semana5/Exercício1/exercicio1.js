// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

const btn = document.getElementById('btn');

function clicarBotao() {
    alert("O botao foi clicado.");
}

btn.addEventListener('click', clicarBotao)
