export default function Lista({ fotoContato, nomeContato, descContato }) {
    return (
        <div className="ContainerContato" >
            <img src={fotoContato} alt="foto do contato" className="ImagemContato" />
            
            <div className="Contato">
            <h4>{nomeContato}</h4>
            <p>{descContato}</p>
            </div>
        </div>
    )
}