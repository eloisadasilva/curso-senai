//Crie uma função não nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

var verificarParImpar = function (numero){
    var resultado;
    if(numero % 2 == 0){
        resultado = 'Par'
    } else if(numero %2 != 0){
        resultado = 'Ímpar'
    } else{ resultado = "Inválido"}
  
    return resultado
  }