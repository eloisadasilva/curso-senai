export default function Produtos({ fotoProduto, nomeProduto, precoProduto }) {
    return (
        <div className="ContainerProduto" >
            <img src={fotoProduto} alt="foto do produto" className="ImagemProduto" />
            
            <div className="Produto">
            <h4>{nomeProduto}</h4>
            <p>{precoProduto}</p>
            </div>
        </div>
    )
}