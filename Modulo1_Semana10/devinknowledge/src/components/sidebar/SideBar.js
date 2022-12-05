export default function SideBar(){
    return <div>
                    <body onload="mostrarDados(objDicas)">
                <div class="formulario">
                    <header>
                        <img class="imgLivro" src="./imagens/book.png" alt="Imagem de um livro"/>
                            <h2>DEVin</h2>
                            <h1>Knowledge</h1><strong></strong>
                            <h3>Learn, Code and Save</h3>
                    </header>

                    <form action="projeto_01.html">
                        <label>Título</label>
                        <input class="input" id="digTitulo" type="text" placeholder="Digite um título" required minlength="8" 
                maxlength="64"/>
                        <label>Linguagem/Skill</label> 
                        <input class="input" id="digLinguagem" type="text" placeholder="Digite uma linguagem ou skill" required 
                minlength="4" maxlength="16"/> 

                        <label>Categoria</label>
                            <select class="input" name="selCategoria" id="selCategoria" required>
                                <option value="">Selecione uma categoria</option>
                                <option value="FrontEnd">FrontEnd</option>
                                <option value="BackEnd">BackEnd</option>
                                <option value="FullStack">FullStack</option>
                                <option value="Comportamental/Soft">Comportamental/Soft</option>
                            </select>

                            <label>Descrição</label>
                                <textarea name="digDescricao" id="digDescricao" cols="30" rows="10"
                                    placeholder="Escreva aqui o detalhamento da sua dica..." required minlength="32"
                                    maxlength="512"></textarea>

                                <label>Vídeo do YouTube</label> 
                                    <input class="input" id="urlVideo" type="url" placeholder="Inclua o link do vídeo"/>
                                        <div class="button">
                                            <button type="reset" id="btnLimpar">Limpar</button>
                                            <button type="submit" id="btnSalvar" onclick="salvarDados()"> Salvar </button>
                                        </div>

                                    </form>

                                </div>
                                </body>

    </div>
}