// Crie uma classe chamada Pessoa com os atributos nome, idade, cpf e anoAniversario. Agora construa um método chamado podeDirigir dentro dessa classe para verificar se a idade é maior ou menor que 18, se for maior ou igual a 18 o retorno desse método será true se não false. Agora, fora dessa classe crie uma instância (usando o new ) inicialize ela (usando o acesso a um atributo " . ") para uma variável const e verifique o retorno com os seus dados em seus atributos.



class Pessoa {
  nome;
  idade;
  cpf;
  anoAniversario;

  constructor(nome, idade, cpf, anoAniversario) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.anoAniversario = anoAniversario;
  }

  podeDirigir() {
    if (this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

const dadosPessoa = new Pessoa("Maria", 17, "123456789-22", 2002);
console.log(dadosPessoa);
const retorno = dadosPessoa.podeDirigir();
console.log(retorno);




