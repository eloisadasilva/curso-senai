

const Soma = ({ numero1, numero2}) => {
  const resultado = parseFloat(numero1) + parseFloat(numero2);
  return <p>A soma dos números é {resultado}.</p>
}

export default Soma;


