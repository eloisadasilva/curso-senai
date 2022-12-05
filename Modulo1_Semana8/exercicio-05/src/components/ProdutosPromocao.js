export default function ProdutosPromocao({ fotoProduto, nomeProduto, precoProduto }) {
    return (
        <div className="ContainerProduto" >
            <img src={fotoProduto} alt="foto do produto" className="ImagemProduto" />
            
            <div className="Produto">
            <h4>{nomeProduto}</h4>
            <p>R$ {precoProduto}</p>
            <p className="Promocao">{precoProduto < 40.00 ? <p>PROMOÇÃO</p> : <p></p>}</p>

            </div>
        </div>
    )
}