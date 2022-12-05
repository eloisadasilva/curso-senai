/* Observe o array de objetos abaixo:

let arrayMusicas = [
    {
        nome: "Believer",
        banda: "Imagine Dragons",
        anoDeLancamento: 2017,
        isGood: false
    },
    {
        nome: "Losing my Religion",
        banda: "R.E.M",
        anoDeLancamento: 1991,
        isGood: false
    },
    {
        nome: "Duality",
        banda: "Slipknot",
        anoDeLancamento: 2004,
        isGood: false
    },
    {
        nome: "Imagination",
        banda: "Foster the People",
        anoDeLancamento: 2019,
        isGood: false
    },
    {
        nome: "Without me",
        banda: "Halsey",
        anoDeLancamento: 2018,
        isGood: false
    },
    {
        nome: "DiE4u",
        banda: "Bring me the horizon",
        anoDeLancamento: 2021,
        isGood: false,
    },
    {
        nome: "Hail to the king",
        banda: "Avenged Sevenfold",
        anoDeLancamento: 2013,
        isGood: false
    },
    {
        nome: "Rock you like a hurricane",
        banda: "Scorpions",
        anoDeLancamento: 1984,
        isGood: false
    },
    {
        nome: "Misery business",
        banda: "Paramore",
        anoDeLancamento: 2007,
        isGood: false
    },
    {
        nome: "Brianstorm",
        banda: "Arctic Monkeys",
        anoDeLancamento: 2007,
        isGood: false
    }
];
primeiro altere todos os valores do atributo isGood que atualmente esta false para true
ate porque na lista somente possui músicas boas rsrsrsrs.
_Dica: utilize o .map para isso.

Após isso usando os conhecimentos do DOM imprima em uma lista não ordenada apenas os nomes das músicas

Extra(Não é obrigatório, mas reza a lenda de que quem fizer ganhará um pix de 500 reais):
Sua missão será ao clicar em algum desses nomes imprimir ou em tela toda a informação referente ao item selecionado. */



let arrayMusicas = [
    {
        nome: "Believer",
        banda: "Imagine Dragons",
        anoDeLancamento: 2017,
        isGood: false
    },
    {
        nome: "Losing my Religion",
        banda: "R.E.M",
        anoDeLancamento: 1991,
        isGood: false
    },
    {
        nome: "Duality",
        banda: "Slipknot",
        anoDeLancamento: 2004,
        isGood: false
    },
    {
        nome: "Imagination",
        banda: "Foster the People",
        anoDeLancamento: 2019,
        isGood: false
    },
    {
        nome: "Without me",
        banda: "Halsey",
        anoDeLancamento: 2018,
        isGood: false
    },
    {
        nome: "DiE4u",
        banda: "Bring me the horizon",
        anoDeLancamento: 2021,
        isGood: false,
    },
    {
        nome: "Hail to the king",
        banda: "Avenged Sevenfold",
        anoDeLancamento: 2013,
        isGood: false
    },
    {
        nome: "Rock you like a hurricane",
        banda: "Scorpions",
        anoDeLancamento: 1984,
        isGood: false
    },
    {
        nome: "Misery business",
        banda: "Paramore",
        anoDeLancamento: 2007,
        isGood: false
    },
    {
        nome: "Brianstorm",
        banda: "Arctic Monkeys",
        anoDeLancamento: 2007,
        isGood: false
    }
];

let arrayMusicasBoas = arrayMusicas.map(function (element) {
    return {
        nome: element.nome,
        banda: element.banda,
        anoDeLancamento: element.anoDeLancamento,
        isGood: element.isGood = true
    }
});


arrayMusicasBoas.forEach(function(musica){
    document.write("Clique na seta para ter mais detalhes sobre a música:");
    var lista = document.querySelector("body")
    var nomebanda = document.createTextNode(musica.banda)
    var anoLancamento = document.createTextNode(musica.anoDeLancamento)
    var ebom = document.createTextNode(musica.isGood)
    const detalhe = document.createElement("details")
    const detalhes = lista.appendChild (detalhe)
    const tituloDetalhe = document.createElement ("summary")
    tituloDetalhe.innerHTML = musica.nome
    const paragrafo1 = document.createElement("p")
    const paragrafo2 = document.createElement("p")
    const paragrafo3 = document.createElement("p")
    detalhes.appendChild(tituloDetalhe)
    detalhes.appendChild(paragrafo1)
    detalhes.appendChild(paragrafo2)
    detalhes.appendChild(paragrafo3)
    paragrafo1.appendChild(nomebanda)
    paragrafo2.appendChild(anoLancamento)
    paragrafo3.appendChild(ebom)
})