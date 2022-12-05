function getTypeColor(tipoPokemon){
    switch (tipoPokemon){
        case 'grass': return 'greenyellow';
        case 'water': return 'aqua'; 
        case 'fire': return 'orange';
        case 'bug': return 'yellow';
        default: return 'white';
      }
    }

export default function Pokedex({ nomePokemon, idPokemon, fotoPokemon, tipoPokemon }) {
    
    return (
        <div className="ContainerPokemon" >

            <div className="CardPokemon" style={{backgroundColor:getTypeColor(tipoPokemon)}}>
                <img src={fotoPokemon} alt="foto do pokemon" className="ImagemPokemon" />
                <div className="IdPokemon">
                    <p>{idPokemon}</p>
                </div>
                <h4>{nomePokemon}</h4>
                <p>Type: {tipoPokemon}</p>
            </div>
        

        </div>
    )
}
