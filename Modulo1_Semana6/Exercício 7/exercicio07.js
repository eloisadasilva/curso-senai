/* Agora treinando um pouco mais requisições fetch inicie uma comunicação com a API via cep (https://viacep.com.br/).

Crie uma página html para buscar o endereço através do cep contendo:
1 input para receber o CEP
1 button para buscar o endereço
Crie uma função assíncrona que deve realizar o fetch do endereço do cep
Utilize este endpoint: https://viacep.com.br/ws/01001000/json/
Substitua o 01001000 pelo cep digitado no input
Faça a chamada utilizando Fetch e aguarde o resultado
Adicione no button o evento de click para chamar a função criada. OK
Caso a api retorne sucesso deve ser adicionado um elemento <p> com o endereço formatado ex: logradouro, complemento - bairro - localidade/uf */

var botao = document.getElementById('pesquisar');
botao.addEventListener('click', (PesquisarEndereco));

function PesquisarEndereco() {

    let cepDigitado = document.getElementById("cep").value;

    const dados = {
        method: "GET",
    }

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`, dados)
        .then((response) => {
            return response.json();
        })

        .then((response) => {
            console.log(response);
            let p = document.querySelector("p");
            p.innerHTML = "Logradouro: " + response.logradouro + "<br>";
            p.innerHTML += "Complemento: " + response.complemento + "<br>";
            p.innerHTML += "Bairro: " + response.bairro + "<br>";
            p.innerHTML += "Localidade: " + response.localidade + "<br>";
            p.innerHTML += "UF: " + response.uf;
        })

        .catch((err) => {
            console.error(err);
        });
}