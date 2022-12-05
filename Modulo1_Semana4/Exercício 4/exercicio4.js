// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse item seja excluído (utilize o addEventListener de click).
// Pode conferir no console.log() como está o array após a exclusão.


let produtos = ["Celular", "Notebook", "Smart TV", "Impressora", "Câmera", "Tablet", "Vídeo Game"];


let button = document.getElementById("button");

button.addEventListener("click", function () {
  let produtoexcluido = document.getElementById("produtoexcluido").value;

  excluirProduto(produtoexcluido);

});

function excluirProduto(produtoexcluido){
let indice = produtos.indexOf(produtoexcluido);
if (indice != -1) {
  produtos.splice(indice, 1);
} else{
  alert("Digite um produto da lista.")
}

console.log(produtos);

}


