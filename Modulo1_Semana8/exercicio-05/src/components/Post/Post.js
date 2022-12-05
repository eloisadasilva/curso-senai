import './Post.css'
import PostCabecalho from './PostCabecalho'
import PostRodape from './PostRodape'

export default function Post ({fotoPerfil, nomeUsuario, dataPost, fotoPost, descPost, numeroCurtidas, curtidoPor})
{
    return(
        <div className="Post">
            <PostCabecalho fotoPerfil= {fotoPerfil} nomeUsuario= {nomeUsuario} dataPost={dataPost}/>

            <p>{descPost}</p>
            <img src={fotoPost} alt= 'foto do post' className="FotoDoPost"/>

            <PostRodape curtidoPor={curtidoPor} numeroCurtidas={numeroCurtidas}/>
        </div>
    )
}


