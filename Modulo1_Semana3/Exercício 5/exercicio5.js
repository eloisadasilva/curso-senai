//5 - Substitua as repetições do exercício anterior por uma função.


const frases = ["Frase 1. ", "Frase 2. ", "Frase 3. ", "Frase 4. ", "Frase 5. "]
function repetirFrases(listaFrases) {
  var divTexto = document.getElementById("texto");
  for (frase of listaFrases) {
    const texto = document.createElement("texto");
    texto.innerText = frase;
    divTexto.appendChild(texto);
  }
}

repetirFrases(frases);