/* Crie 2 funções, ambas recebem um número 
e retorna true ou false:
a primeira  verifica se é par
a segunda verifica se é ímpar

Em seguida crie uma função que recebe como parâmetros: 
um array de números e uma função callback.
A função principal deverá ser capaz de filtrar os números 
e retornar um array de números filtrados 
(independente de qual seja a função callback).

Dica: o filtro poderá ser de números ímpares ou pares. */


function ePar(num) {
    if (num %2 == 0) {
      return true;
    }
    return false;
  }
  
  function eImpar(num) {
    if (num %2 != 0) {
      return true;
    }
    return false;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  function filtrarNumeros(array, parOuImpar) { //parOuImpar é a função callback
    const numerosFiltrados = array.filter(parOuImpar);
    return numerosFiltrados;
  }
  
  console.log(filtrarNumeros(array, ePar));
  console.log(filtrarNumeros(array, eImpar));
