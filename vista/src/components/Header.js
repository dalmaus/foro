import avatar from "../img/avatar.png";
import {Link} from "react-router-dom";

export function Header(){

    const usuarioNombre = localStorage.getItem("usuario_nombre");
    const usuarioId = localStorage.getItem("usuario_id");

    return(
          <header>
              <nav>
                  <div className="flex-container">
                      <div className="inicio-link">
                          <div>
                              <Link to="/">Inicio</Link>
                          </div>
                      </div>
                      <div className="nav-usuario">
                          <span className="usuario-enlace">
                              <Link to={`/perfil`}>{usuarioNombre}</Link>
                          </span>
                          <div className="desplegable">
                              <img src={avatar} alt="avatar del usuario"/>
                              <div className="desplegable-contenido">
                                  <Link to={`/usuario/${usuarioId}`}>Perfil</Link>
                                  <Link to={`/perfil/hilos`}>Hilos</Link>
                                  <Link to={`/perfil/mensajes`}>Mensajes</Link>
                                  <Link to="/logout">Cerrar sesión</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </header>
    );
}
export default Header;