/* Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá pegar o nome do pokemon e ao apertar no botão pesquisar irá fazer a mesma requisição construída anteriormente.
Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as habilidades do pokémon (observe a propriedade abilities). */


var botao, pokemonPesquisado;
botao = document.getElementById('pesquisar');
botao.addEventListener('click', (Pesquisar));

function Pesquisar() {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        nome.innerHTML += xhr.response.name;
        altura.innerHTML += xhr.response.height;
        peso.innerHTML += xhr.response.weight;

        let imagem = xhr.response.sprites.front_default
        document.getElementById("imagem").setAttribute("src", imagem);

        habilidades.innerHTML = "Habilidades: ";
        xhr.response.abilities.forEach((habilidade) => {
            let tagLi = document.createElement("li");
            tagLi.innerHTML += habilidade.ability.name;
            habilidades.appendChild(tagLi);
        });
    }

    xhr.onerror = (err) => console.log(err);
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
    xhr.responseType = "json";
    xhr.send();
}