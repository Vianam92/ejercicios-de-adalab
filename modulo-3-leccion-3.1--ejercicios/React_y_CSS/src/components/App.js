import '../styles/App.scss';
import logo from '../images/logo-adalab.png'

function App() {
  return (
    <div classNameName="app">
      <header className="header">
        <a href="https://adalab.es/">
          <img src={logo} Alt="Logo" title="Logo Adalab"
                className="logo"/></a>
        <nav>
            <ul className="nav">
                <li className="list_one"><a href="https://adalab.es/" className="link">blog</a></li>
                <li className="list_two"><a href="https://adalab.es/" className=" link">Contacto</a></li>
            </ul>
        </nav>
    </header>
    <main className="container">
        <h1 className="title">Creando diversidad digital</h1>
    </main>
    </div>
  );
}

export default App;
