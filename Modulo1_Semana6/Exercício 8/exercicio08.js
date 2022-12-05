/* Após implementar o Ex 3, vamos adicionar tratativas na função criada;
- Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir modal de alerta (alert) informando que o campo precisa ser preenchido
- Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido modal de alerta (alert) informando que o campo foi preenchido com um cep inválido
- Em ambos os casos à cima não deve ser realizada a consulta na api de cep */


var botao = document.getElementById('pesquisar');
botao.addEventListener('click', (ValidarDados));


function ValidarDados() {
    var cepDigitado = document.getElementById("cep").value;
    if (cepDigitado == '') {
        alert("Campo precisa ser preenchido.");
    } else if (cepDigitado.length != 8) {
        alert("Campo foi preenchido com um CEP inválido.");
    } else {
        return PesquisarEndereco(cepDigitado);
    }
}

function PesquisarEndereco(cepDigitado) {

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