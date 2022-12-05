export default function ListaContatos({ fotoContato, nomeContato, ultimaMensagem }) {
    return (
        <div className="ContainerContato" >
            <img src={fotoContato} alt="foto do contato" className="ImagemContato" />
            
            <div className="Contato">
            <h4>{nomeContato}</h4>
            <h6>{ultimaMensagem}</h6>
            </div>
        </div>
    )
}