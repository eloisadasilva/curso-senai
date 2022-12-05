/* Utilizando a api https://pokeapi.co/ e fazendo uma requisição get com XMLHttpRequest, imprima em um console.log() o nome, a altura, o peso e adicione na tela uma imagem (a sua escolha) desse pokémon. Todas as informações precisam vir da api inclusive a imagem.

Dicas: as informações pedidas estão dentro do json que é retornado da api, observe as propriedades: height, weight, sprites e name.
Para o teste no final da url é necessário usar um nome de um pokémon. Ex: pikachu, ditto, charmander… */


const xhr = new XMLHttpRequest();

xhr.onload = () => {
console.log("Nome: " + xhr.response.name + ", Altura: " + xhr.response.height + ", Peso: " + xhr.response.weight + xhr.response.sprites.front_default);

let imagem = xhr.response.sprites.front_default
document.getElementById("imagem").setAttribute("src",imagem);

}

xhr.onerror = (err) => console.log(err);
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
xhr.responseType = "json";
xhr.send();