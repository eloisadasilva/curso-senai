//Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

function verificaDia(dia) {
  dia = dia <= 15 ? "Pertence a primeira quinzena do mês" : "Pertence a segunda quinzena do mês";
  return dia
}

dia = 16;
console.log(verificaDia(dia));
