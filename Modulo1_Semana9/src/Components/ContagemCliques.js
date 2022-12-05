import {useState, useEffect} from "react";

export default function ContagemCliques() {
    const [contagem, setContagem] = useState(0);
  
    useEffect(() => {
      document.title = `Você clicou ${contagem} vezes`;
    });
  
    return (
      <div>
        <p>Você clicou {contagem} vezes vezes no botão.</p>
        <button onClick={() => setContagem(contagem + 1)}>
          Clique aqui
        </button>
      </div>
    );
  }