import './App.css';
import './Components/style.css';
import ListaFrutas from './Components/ListaFrutas.js'
import UtilizandouseEffect from './Components/UtilizandouseEffect.js'
import ContagemCliques from './Components/ContagemCliques.js'
import AlterarTitulo from './Components/AlterarTitulo.js'
import Focus from './Components/Focus.js'
import ListaContatos from './Components/Exercicio06'
import PaginaDownload from './Components/PaginaDownload.js'
import PaginaDownloadEx08 from './Components/Exercicio08.js'
import Exercicio09 from './Components/Exercicio09';
import Exercicio10 from './Components/Exercicio10';
import Login from './Components/Login';


//Para a lista de contatos:
const contatos = [
  {
    fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYyvLg9aMw4pcvDSOQHu7epL412TnODcJBg&usqp=CAU",
    nomeContato: "Maria da Silva",
    ultimaMensagem: "Amiga"
  },
  {
    fotoContato: "https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000",
    nomeContato: "José Pereira",
    ultimaMensagem: "Amigo"
  },
  {
    fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILWAvw46UcgWUDZwQ7jToqryGl-sJLkNLgw&usqp=CAU",
    nomeContato: "Antonio de Souza",
    ultimaMensagem: "Colega de trabalho"
  },
  {
    fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLiGT0S9pLS1TegWMBRLUAu3h3tFbhtCL6A&usqp=CAU",
    nomeContato: "João Oliveira",
    ultimaMensagem: 'Colega de trabalho'
  },
  {
    fotoContato: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJUOLnKurd4BIq3r_k7BpV9_mmiB0mxd4Vg&usqp=CAU",
    nomeContato: "Josefa da Silva",
    ultimaMensagem: 'Vó'
  }
]

function App() {

  const frutas = ["Banana", "Maçã", "Manga", "Uva", "Pera"];
  return (
    <div>
      <div>
        <h2>Exercício 1</h2>

        <ListaFrutas frutas={frutas} />

      </div>

      <div>
        <h2>Exercício 2</h2>
        <UtilizandouseEffect />

      </div>

      <div>
        <h2>Exercício 3</h2>
        <ContagemCliques />

      </div>

      <div>
        <h2>Exercício 4</h2>
        <AlterarTitulo />

      </div>

      <div>
        <h2>Exercício 5</h2>
        <Focus />

      </div>

      <div className="Lista">
        <h2>Exercício 6</h2>
        <p><strong><center>Lista de Contatos</center></strong></p>
        {contatos.map(contato => (
          <ListaContatos
            fotoContato={contato.fotoContato}
            nomeContato={contato.nomeContato}
            ultimaMensagem={contato.ultimaMensagem}
          />
        ))}

      </div>

      <div>
        <h2>Exercício 7</h2>
        <PaginaDownload />

      </div>

      <div>
        <h2>Exercício 8</h2>
        <PaginaDownloadEx08 />

      </div>

      <div>
        <h2>Exercício 9</h2>
        <Exercicio09 />

      </div>

      <div>
        <h2>Exercício 10</h2>
        <Exercicio10 />

      </div>

      <div>
        <h2>Exercício 10</h2>
        <Login />

      </div>

    </div>
  );
}

export default App;
