var contador = 0,
  resposta,
  qtdPessoas = 0;

while (contador < 4) {
  resposta = window.prompt("Qual a sua avaliação para a série Stranger things? Responda com as opções: ruim, bom ou excelente."); 
  switch (resposta) { 
    case "ruim":
      qtdPessoas++;
      break;
    case "bom":
      break;
    case "excelente":
      break;
    default:
      resposta = window.prompt(
        "É permitido apenas digitar uma dessas opções: ruim, bom ou excelente.\n" + "Digite novamente a sua avaliação."
      ); 
      if (resposta == "ruim") { 
        qtdPessoas++; 
      }
  }
  contador++;
}

document.write("<h3> Quantidade de pessoas que avaliaram a série como ruim: " + qtdPessoas + "</h3>");