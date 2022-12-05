//Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

let imprimirTabuada = (numero) => {
  let tabuada = "Tabuada do " + numero;
  console.log(tabuada);
  for (let i = 0; i <= 10; i++) {
    var resultado = i + "x" + numero + "=" + numero * i;
    console.log(resultado);
  }
}
let repetirMultiplicacao = (numero, imprimirTabuada) => {
  for (let i = 0; i <= numero; i++) {
    imprimirTabuada(i)
  }

}

repetirMultiplicacao(10, imprimirTabuada)