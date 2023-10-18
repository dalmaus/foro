// import logo from './logo.svg';
import Index from "./views/Index"
import Footer from "./components/Footer";
import './App.css';
const categorias = [{"id":1,"nombre":"General","descripcion":"Cuestiones generales, información y dudas sobre temas menos específicos","hilos":null},{"id":2,"nombre":"Política","descripcion":"Debate sobre asuntos gubernamentales y políticos de actualidad.","hilos":null},{"id":3,"nombre":"Deportes","descripcion":"Comparte noticias y resultados de tus deportes favoritos.","hilos":null},{"id":4,"nombre":"Videojuegos","descripcion":"Discute juegos, trucos y consejos con otros jugadores.","hilos":null},{"id":5,"nombre":"Música","descripcion":"Explora géneros, artistas y comparte tus canciones.","hilos":null}];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Footer/>
    // </div>
      <div className="App">
          <Index categorias={categorias}/>
          <Footer/>
      </div>
  );
}

export default App;
