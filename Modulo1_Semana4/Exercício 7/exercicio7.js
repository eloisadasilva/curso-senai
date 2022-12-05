/* Crie um código javascript para verificar se todos os alunos do array de objetos arrayAlunos abaixo estão acima da média que será 7.
Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".

let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
] */


let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
];

let alunosRecuperacao = arrayAlunos.filter(function (item) {
    return item.media < 7;
})

if (alunosRecuperacao == "") {
    document.write("<h4>Parabéns a todos da turma.</h4>")
} else {
    document.write("<h4>Alunos que ficaram de recuperação:</h4>")
    alunosRecuperacao.forEach(function (aluno) {
        document.write("<li>Nome: " + aluno.nome + " - Média: " + aluno.media + "</li>");
    });
}