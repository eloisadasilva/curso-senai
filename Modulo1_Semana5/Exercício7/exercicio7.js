
 import mostrarDadosDeUsuario from "./funcoes_ex7.js";


let botao;
botao = document.getElementById("btn");
botao.addEventListener("click", recebeClickDoBotao);

function recebeClickDoBotao(){
    let campoNome, campoImg, campoDescricao;
    campoNome = document.getElementById("nome").value;
    campoImg = document.getElementById("imagem").value;
    campoDescricao = document.getElementById("descricao").value;
    mostrarDadosDeUsuario(campoNome, campoImg, campoDescricao)
}



