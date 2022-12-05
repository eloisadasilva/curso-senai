//Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
//5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

var divTexto = document.getElementById("texto");

var frase1 = document.createElement("texto");
frase1.innerText = "Frase 1. ";
divTexto.appendChild(frase1);

var frase2 = document.createElement("texto");
frase2.innerText = "Frase 2. ";
divTexto.appendChild(frase2);

var frase3 = document.createElement("texto");
frase3.innerText = "Frase 3. ";
divTexto.appendChild(frase3);

var frase4 = document.createElement("texto");
frase4.innerText = "Frase 4. ";
divTexto.appendChild(frase4);

var frase5 = document.createElement("texto");
frase5.innerText = "Frase 5. ";
divTexto.appendChild(frase5);

