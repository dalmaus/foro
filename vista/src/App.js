// import logo from './logo.svg';
import Home from "./views/Home"
import Footer from "./components/Footer";
import './App.css';
import {Routes, Route} from "react-router-dom";

const categorias = [{"id":1,"nombre":"General","descripcion":"Cuestiones generales, información y dudas sobre temas menos específicos","hilos":null},{"id":2,"nombre":"Política","descripcion":"Debate sobre asuntos gubernamentales y políticos de actualidad.","hilos":null},{"id":3,"nombre":"Deportes","descripcion":"Comparte noticias y resultados de tus deportes favoritos.","hilos":null},{"id":4,"nombre":"Videojuegos","descripcion":"Discute juegos, trucos y consejos con otros jugadores.","hilos":null},{"id":5,"nombre":"Música","descripcion":"Explora géneros, artistas y comparte tus canciones.","hilos":null}];

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home categorias={categorias}/>} />
              <Route path="/categoria/:id" element={<Home />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
