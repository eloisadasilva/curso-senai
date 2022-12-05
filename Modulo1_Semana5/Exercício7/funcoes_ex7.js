function mostrarDadosDeUsuario(nome,imagem,descricao)
{

document.getElementById("recebeNome").innerHTML = nome;
document.getElementById("imagemFinal").setAttribute("src",imagem);
document.getElementById("recebeDescricao").innerHTML = descricao;
};


export default mostrarDadosDeUsuario;

