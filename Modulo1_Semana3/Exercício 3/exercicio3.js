//3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// (ex: A quantidade informada foi _, a de valores pares foi _, e a de valores ímpares foi )


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




