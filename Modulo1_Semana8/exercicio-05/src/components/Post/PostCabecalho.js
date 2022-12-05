export default function PostCabecalho({
    fotoPerfil, nomeUsuario, dataPost
}){
    return(
        <div className="Header">
            <div className="InformacoesPessoais">
                <img src={fotoPerfil} alt="foto do perfil" className="ImagemDoPerfil" />

                <div>
                    <h3 className="NomeDoAutor"> {nomeUsuario} </h3>
                    <p className="DataDoPost"> {dataPost} </p>
                </div>
            
            </div>
            <img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" alt="menu" className="Menu" /> 
        </div>
    );
}