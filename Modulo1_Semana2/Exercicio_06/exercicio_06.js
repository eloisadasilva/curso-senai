var peso = window.prompt("Digite seu peso:");
var altura = window.prompt("Digite sua altura em metros:");
var resultado = peso / (altura * altura);
var imc = resultado.toFixed(2);

if(imc >= 25){
    document.write("<h3> Seu IMC é de: " + imc + "<br>Você está acima do peso, procure um médico.</h3>");
    window.alert("Seu IMC é de: " + imc + "\n" + "Você está acima do peso, procure um médico.");
} else if (imc >= 18.5 && imc <= 24.9) {
    document.write("<h3> Seu IMC é de: " + imc + "<br>PARABÉNS!! Você está no peso ideal.</h3>");
} else{
    document.write("<h3> Seu IMC é de: " + imc + "<br>Você está abaixo do peso, procure um médico.</h3>");
}
