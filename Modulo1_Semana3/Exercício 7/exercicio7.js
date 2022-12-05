//7 - BaixE o programa Postman para Windows/Linux e faça uma requisição GET para o seguinte endereço: https://jsonplaceholder.typicode.com/todos/1

// Analise e entenda a resposta que é entregue em formato JSON.
// Em seguida, explique, com suas palavras, o que entendeu a respeito.


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




