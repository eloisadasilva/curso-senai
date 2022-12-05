//Crie uma arrow function que recebe um array de números e calcula a média deles

let array = [10, 15, 25, 30, 45], total = 0, media = 0;

let somar = array.forEach((item) => {
  total += item;
  media = total / array.length;
})

console.log(media)

  