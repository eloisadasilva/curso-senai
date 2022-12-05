export default function Maincontent(){
    return <div>

<body>


<div class="knowledge">
    <div class="container">
        <div id="card">
            <p>Total</p>
            <p class="valor" id="valorT"></p>
        </div>

        <div id="card">
            <p>FrontEnd</p>
            <p class="valor" id="valorF"></p>
        </div>

        <div id="card">
            <p>BackEnd</p>
            <p class="valor" id="valorB"></p>
        </div>

        <div id="card">
            <p>FullStack</p>
            <p class="valor" id="valorFS"></p>
        </div>

        <div id="card">
            <p>SoftSkill</p>
            <div class="valor" id="valorS"></div>

        </div>
    </div>

    <div class="container2">

        <input id="inputPesquisar" type="text" placeholder="Digite um título para buscar..."/>


            <button type="button" id="btnPesquisar" onclick="pesquisarDados()" class="btnPequeno">
                <img class="imgBtnPequeno" src="./imagens/magnifying-glass-solid.svg"/>
            </button>


            <button type="reset" id="btnLimparPesquisa" onclick="limparPesquisa()" class="btnPequeno">
                <img class="imgBtnPequeno" src="./imagens/xmark-solid.svg"/>
            </button>

    </div>

    <div id="container3">

    </div>

</div>
<script src="./projeto_01.js" default></script>
</body>

    </div>
}