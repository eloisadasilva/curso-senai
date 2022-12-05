import {useState, useEffect} from "react";

export default function UtilizandouseEffect() {

    const [texto, setTexto] = useState('');

    useEffect(() => {
        console.log(`O texto digitado foi ${texto}`)
      }, [texto])

  
      return (

        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite uma palavra"></input>

    );
  }