//Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:
// (1) Hortifruti
// (2) Laticínios
// (3) Carnes
// (4) Peixes
// (5) Aves
// (6) Fechar pedido
// Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
// Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
// Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.


var resposta;
var prodMaiorQuant = '';
var qtd = [0, 0, 0, 0, 0];

do {
  resposta = window.prompt(
    "Qual produto deseja comprar? Digite o código de uma das opções: (1) Hortifruti / (2) Laticínios / (3) Carnes / (4) Peixes / (5) Aves / (6) Fechar pedido.");

  if (resposta != 1 && resposta != 2 && resposta != 3 && resposta != 4 && resposta != 5 && resposta != 6) {
    window.alert("É possível digitar apenas o código de uma das opções: (1) Hortifruti / (2) Laticínios / (3) Carnes / (4) Peixes / (5) Aves / (6) Fechar pedido");
  } else if (resposta == 1) {
    qtd[0] = parseFloat(window.prompt("Qual a quantidade de Hortifruti deseja?"));

  } else if (resposta == 2) {
    qtd[1] = parseFloat(window.prompt("Qual a quantidade de Laticínios deseja?"));

  } else if (resposta == 3) {
    qtd[2] = parseFloat(window.prompt("Qual a quantidade de Carnes deseja?"));

  } else if (resposta == 4) {
    qtd[3] = parseFloat(window.prompt("Qual a quantidade de Peixes deseja?"));

  } else if (resposta == 5) {
    qtd[4] = parseFloat(window.prompt("Qual a quantidade de Aves deseja?"));

  }

}
while (resposta != 6) {
  var maior = Math.max.apply(null, qtd);
  if (maior == 0){
    prodMaiorQuant = "Nenhum produto foi selecionado.";
  } else if (maior == qtd[0]) {
    prodMaiorQuant = "Hortifruti";
  } else if (maior == qtd[1]) {
    prodMaiorQuant = "Laticínios";
  } else if (maior == qtd[2]) {
    prodMaiorQuant = "Carnes";
  } else if (maior == qtd[3]) {
    prodMaiorQuant = "Peixes";
  } else if (maior == qtd[4]) {
    prodMaiorQuant = "Aves";
}
}
document.write("<h3> Produto com maior quantidade: " + prodMaiorQuant + "<br> Total: " + maior + "</h3>");
