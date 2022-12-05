export default function ListaFrutas({frutas}) {
    return (
        <>

        <h2>Lista de frutas:</h2>
        {
            frutas.map((fruta, index) => (
                <p key={index}>{fruta}</p>
            ))
        }
        
        
        </>
      
    );
  }