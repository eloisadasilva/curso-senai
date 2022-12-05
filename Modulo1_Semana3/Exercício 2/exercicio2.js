//Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).

function imprimirElementosLista(lista = []) {
    for (var item of lista) {
    }
    console.log(item);
}
    function retornarQuantidadeItens(lista = []) {
    var quantidadeitens = lista.length;
    return quantidadeitens;
}

function elementosQuantidadeLista(lista = []){
    imprimirElementosLista(lista);
    retornarQuantidadeItens(lista);
}

lista = ["teste1", "teste2", "teste3", "teste4"];

console.log(elementosQuantidadeLista(lista));