//Crie uma arrow function que recebe um array de números  e retorne um array contendo apenas números positivos

var array= [-1, -2, 0, 3, 4, 5, 6, 7, 8, 10, -10]
let numerosPositivos = (array) => {
  arrayPositivos = []
  for (let item of array) {
    if (item >= 0){
      arrayPositivos.push(item)
    }
  }
  return arrayPositivos
}
console.log(numerosPositivos(array))