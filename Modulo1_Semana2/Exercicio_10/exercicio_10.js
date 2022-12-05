//Pensando em um sistema de notas online, crie um código que irá capturar o nome do aluno e a nota de 4 unidades usando o prompt dentro de uma laço while, a ideia é que a cada valor digitado seja puxado para um array com o método push. Após isso, crie um laço “for” que irá calcular a soma de todos os itens do array para ser calculada sua média. Ao final de tudo, deverá ser apresentado em tela o nome do aluno, sua média e se o aluno foi aprovado ou não, para esse último tópico considere a média para aprovação maior ou igual a 7.



var nota = [],
  aluno,
  unidades = 0;

aluno = window.prompt("Qual o nome do aluno?");
while (unidades < 4) {
  nota.push(parseFloat(window.prompt("Qual a nota?")));
  unidades++;
}

var soma = 0;

for (var i = 0; i < nota.length; i++) {
  soma += nota[i];
}

let media = soma / nota.length;

if (media >= 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado"
}


document.write('<h3> Nome do Aluno: ' + aluno + '</br> Média: ' + media + '</br> Resultado: ' + resultado + '</h3>');