/* Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string junte para a string abaixo.

"Eu, nome sobrenome, possuo idade anos, e nasci em calculo do ano em que estamos - sua idade . " */

let nome = window.prompt("Qual o seu nome?");
let sobrenome = window.prompt("Qual o seu sobrenome?");
let idade = window.prompt("Qual a sua idade?");


document.write(`Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022 - idade}.`);
console.log(text);