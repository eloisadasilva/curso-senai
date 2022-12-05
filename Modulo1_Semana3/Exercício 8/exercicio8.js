//8 - Crie um site com os seguintes requisitos:

// um campo de texto (input) onde o usuário irá digitar uma mensagem

// três botões:

// um botão “adicionar”, que no momento do clique insira a mensagem na tela

// um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
// opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

// um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
// opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”


var numeros = [];
let pares = [];
let impares = [];
function quantidadeParImpar(numeros) {
    
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
            console.log(pares);
        } else {
            impares.push(numeros[i]);
        }
    }

}

//exemplo de array
numeros = [1, 2, 4, 9, 12, 15, 16, 25, 30, 31, 38, 40, 45];
quantidadeParImpar(numeros);

document.write("<h3> A quantidade informada foi " + numeros.length + ", a de valores pares foi " + pares.length + ", e a de valores ímpares foi " + impares.length + ".</h3>");




