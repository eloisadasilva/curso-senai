
import './App.css';
import Soma from './components/Soma.js'
import Botao from './components/Botao.js'
import Post from './components/Post/Post'
import Lista from './components/Lista.js'
import Produtos from './components/Produtos.js'
import ProdutosPromocao from './components/ProdutosPromocao.js'
import Table from './components/Tabela.js'
import Pokedex from './components/Pokedex.js'

function App() {

    //Para o Post
    const posts = [
        {
            fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYyvLg9aMw4pcvDSOQHu7epL412TnODcJBg&usqp=CAU",
            nomeUsuario: "Maria da Silva",
            dataPost: "Ontem",
            fotoPost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-f6bGtMTPX6MYo4uhSII7vAfg8aAHHF1Iw&usqp=CAU",
            descPost: "Janta de hoje... <3",
            curtidoPor: "José",
            numeroCurtidas: 2,
        },
        {
            fotoPerfil: "https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000",
            nomeUsuario: "José Pereira",
            dataPost: "5 dias",
            fotoPost: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeiOSk2JPInCniGMB7LnqfqZqrerLKd_qjA&usqp=CAU",
            descPost: "Curtindo uma praia",
            curtidoPor: "Eloisa",
            numeroCurtidas: 10,
        }
    ]


    //Para a lista de contatos:
    const contatos = [
        {
            fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYyvLg9aMw4pcvDSOQHu7epL412TnODcJBg&usqp=CAU",
            nomeContato: "Maria da Silva",
            descContato: "Amiga"
        },
        {
            fotoContato: "https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000",
            nomeContato: "José Pereira",
            descContato: "Amigo"
        },
        {
            fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILWAvw46UcgWUDZwQ7jToqryGl-sJLkNLgw&usqp=CAU",
            nomeContato: "Antonio de Souza",
            descContato: "Colega de trabalho"
        },
        {
            fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLiGT0S9pLS1TegWMBRLUAu3h3tFbhtCL6A&usqp=CAU",
            nomeContato: "João Oliveira",
            descContato: "Colega de trabalho"
        },
        {
            fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJUOLnKurd4BIq3r_k7BpV9_mmiB0mxd4Vg&usqp=CAU",
            nomeContato: "Josefa da Silva",
            descContato: "Vó"
        }
    ]

    //Para lista de produtos
    const produtos = [
        {
            fotoProduto: "https://drogariaspacheco.vteximg.com.br/arquivos/ids/925095-1000-1000/501280---desodorante-aerosol-rexona-antibacterial-150ml-1.jpg?v=637946426957070000",
            nomeProduto: "Desodorante",
            precoProduto: 50.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1OOwYtKbWoRDF7yZCXHRxFevNw8FiMo3lA&usqp=CAU",
            nomeProduto: "Perfume",
            precoProduto: 200.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLIO2_SuQRYTNSuwQ4CLf0I7b6j_IhWbii7v989PWMWLiUpXo3Gro-cnE7BWPNX4HIbE&usqp=CAU",
            nomeProduto: "Creme corporal",
            precoProduto: 60.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRiSaB2YbQ9ActchiOZRW9nEaeSZZh4e_3Q&usqp=CAU",
            nomeProduto: "Shampoo",
            precoProduto: 30.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxh4tpixnYvsW7nDWWcgTxrfQHQ_kgbDLSA&usqp=CAU",
            nomeProduto: "Condicionador",
            precoProduto: 30.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPB_azhlvqpU0ADILf7P9YWNVJSFYVEtXdg&usqp=CAU",
            nomeProduto: "Sabonete líquido",
            precoProduto: 25.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIPXWcVO2cotx0nS3mD6VEErMX4JaRkiuYA&usqp=CAU",
            nomeProduto: "Sabonete em barra",
            precoProduto: 15.00
        },
        {
            fotoProduto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqwWWcYuHMtpoW9s-eXKwT2OdpW1sCEnhow&usqp=CAU",
            nomeProduto: "Creme para pentear",
            precoProduto: 40.00
        },
    ]

    //Para lista de Pokemons
    const pokemons = [
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            idPokemon: "#001",
            nomePokemon: "Bulbasaur",
            tipoPokemon: "grass"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
            idPokemon: "#002",
            nomePokemon: "Ivysaur",
            tipoPokemon: "grass"    
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
            idPokemon: "#003",
            nomePokemon: "Venusaur",
            tipoPokemon: "grass"    
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            idPokemon: "#004",
            nomePokemon: "Charmander",
            tipoPokemon: "fire"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
            idPokemon: "#005",
            nomePokemon: "Charmeleon",
            tipoPokemon: "fire"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
            idPokemon: "#006",
            nomePokemon: "Charizard",
            tipoPokemon: "fire"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            idPokemon: "#007",
            nomePokemon: "Squirtle",
            tipoPokemon: "water"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
            idPokemon: "#008",
            nomePokemon: "Wartortle",
            tipoPokemon: "water"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
            idPokemon: "#009",
            nomePokemon: "Blastoise",
            tipoPokemon: "water"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
            idPokemon: "#010",
            nomePokemon: "Caterpie",
            tipoPokemon: "bug"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
            idPokemon: "#011",
            nomePokemon: "Metapod",
            tipoPokemon: "bug"     
        },
        {
            fotoPokemon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
            idPokemon: "#012",
            nomePokemon: "Butterfree",
            tipoPokemon: "bug"     
        }
    ]

    return (
        <div>
            <div>
                <p>
                    <Soma numero1={5} numero2={7} />
                </p>
            </div>

            <div>
                <Botao />
            </div>


            <div>
                {posts.map(post => (
                    <Post
                        fotoPerfil={post.fotoPerfil}
                        nomeUsuario={post.nomeUsuario}
                        dataPost={post.dataPost}
                        fotoPost={post.fotoPost}
                        descPost={post.descPost}
                        curtidoPor={post.curtidoPor}
                        numeroCurtidas={post.numeroCurtidas}
                    />
                ))}

            </div>

            <div className="Lista">
                <p><strong><center>Lista de Contatos</center></strong></p>
                {contatos.map(contato => (
                    <Lista
                        fotoContato={contato.fotoContato}
                        nomeContato={contato.nomeContato}
                        descContato={contato.descContato}
                    />
                ))}

            </div>

            <div className="Produtos">
                <p><strong><center>Lista de Produtos</center></strong></p>
                {produtos.map(produto => (
                    <Produtos
                        fotoProduto={produto.fotoProduto}
                        nomeProduto={produto.nomeProduto}
                        precoProduto={produto.precoProduto}
                    />
                ))}

            </div>

            <div className="Produtos">
                <p><strong><center>Lista de Produtos</center></strong></p>
                {produtos.map(produto => (
                    <ProdutosPromocao
                        fotoProduto={produto.fotoProduto}
                        nomeProduto={produto.nomeProduto}
                        precoProduto={produto.precoProduto}
                    />
                ))}

            </div>

            <div className="App">
                <Table
                    title="Lista de alunos"
                    description="Lista com dados pessoais dos alunos do curso de React"
                    columns={[
                        {
                            name: 'Nome',
                            prop: 'name'
                        },
                        {
                            name: 'Sobrenome',
                            prop: 'lastName'
                        },
                        {
                            name: 'Idade',
                            prop: 'age'
                        }
                    ]}
                    data={[
                        {
                            name: 'João',
                            lastName: 'Silva',
                            age: 20,
                            id: 1
                        },
                        {
                            name: 'Maria',
                            lastName: 'Souza',
                            age: 25,
                            id: 2
                        },
                        {
                            name: 'Pedro',
                            lastName: 'Oliveira',
                            age: 30,
                            id: 3
                        }
                    ]}
                />
            </div>

            <div className="Pokedex">
                <p><strong><center>Lista de Pokemons</center></strong></p>
                {pokemons.map(pokemon => (
                    <Pokedex
                    fotoPokemon={pokemon.fotoPokemon}
                    idPokemon={pokemon.idPokemon}
                    nomePokemon={pokemon.nomePokemon}
                    tipoPokemon={pokemon.tipoPokemon}
                    />
                ))}

            </div>

        </div>

    );

}




export default App;
