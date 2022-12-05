import {useState, useEffect} from "react";

export default function AlterarTitulo() {

    const [titulo, setTitulo] = useState('');
    const [valorBotao, setValorBotao] = useState();
  
    useEffect(() => {
        if (titulo === 'Botão 1 foi clicado.'){
            setValorBotao('Botão 1 foi clicado.')
        } else if(titulo === "Botão 2 foi clicado."){
            setValorBotao('Botão 2 foi clicado.')
        }else{
            setValorBotao('Não ocorreu clique em nenhum dos botões abaixo.')
        }
    }, [titulo])
  
    return (
      <div>
      <span>{valorBotao}</span>
      <div>
      <button type="submit" onClick={() => setTitulo('Botão 1 foi clicado.')}>Título 1</button>
      <button type="submit" onClick={() => setTitulo('Botão 2 foi clicado.')}>Título 2</button>
      </div>
    </div>
    );
  }