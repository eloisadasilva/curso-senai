/* Na tag img com a classe pokemonimage adicione a imagem do pokémon que você irá pesquisar.
No span com a classe pokemonnumber será adicionado o id do pokemon.
No span com a classe pokemonname será adicionado o nome do pokemon.
No input com a classe input__search será onde o usuário poderá pesquisar pelo nome ou pelo id.
No span com o id pokemontype será adicionado o tipo do pokémon pesquisado.
No span com o id weight irá ser apresentado o peso do pokemon.
Ao clicar no botão com a classe button será iniciado toda a funcionalidade da aplicação: pesquisa da api, adição das informações nos campos… */




var botao = document.querySelector('.button');
botao.addEventListener('click', (Pesquisar));

function Pesquisar() {

    let pokemon = document.querySelector(".input__search").value;

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {

        pokemonnumber.innerHTML = xhr.response.id;
        pokemonname.innerHTML = xhr.response.name;
        pokemontype.innerHTML = xhr.response.types[0].type.name;
        weight.innerHTML = xhr.response.weight;


        let imagem = xhr.response.sprites.front_default
        document.querySelector(".pokemonimage").setAttribute("src", imagem);

        ability.innerHTML = "";
        xhr.response.abilities.forEach((item) => {
            let tagLi = document.createElement("li");
            tagLi.innerHTML += item.ability.name;
            ability.appendChild(tagLi);
        });
    }

    xhr.onerror = (err) => console.log(err);
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    xhr.responseType = "json";
    xhr.send();
}