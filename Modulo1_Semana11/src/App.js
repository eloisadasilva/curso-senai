import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="row g-3">
    <div className="col-3">
      <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" />
    </div>
    <div className="col-3">
      <input type="text" className="form-control" placeholder="Sobrenome" aria-label="Sobrenome" />
    </div>
    <div className='col-3'>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </div>
  </form>
  );
}

export default App;
