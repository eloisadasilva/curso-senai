/* Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”.
Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”. */


function verificarNumero(numero){
    const verificaNumero = new Promise((resolve, reject) => {
        if(numero %2 == 0){
            resolve("Número validado é par");
        } else{
            reject("Error: número informado é impar");
        }
      });
      
  verificaNumero.then((resolve)=>{
      console.log(resolve);
  }).catch(
    (erro)=>{console.error(erro)}
  );
}
let numero = 60
verificarNumero(numero);
