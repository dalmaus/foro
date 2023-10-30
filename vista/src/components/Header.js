import avatar from "../img/avatar.png";
import {Link} from "react-router-dom";

export function Header(){

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
                              <Link to={`/perfil`}>{"Usuario1"}</Link>
                          </span>
                          <div className="desplegable">
                              <img src={avatar} alt="avatar del usuario"/>
                              <div className="desplegable-contenido">
                                  <Link to={`/usuario/1`}>Perfil</Link>
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