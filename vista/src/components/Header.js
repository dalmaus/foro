import avatar from "../img/avatar.png";
import {Link} from "react-router-dom";
import {usuarioCerrarSesion} from "../api/UsuarioApi";

export function Header({usuarioDatos}){
    async function cerrarSesion() {
        await usuarioCerrarSesion();
    }

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
                              <Link to={`/usuario/${usuarioDatos.id}`}>{usuarioDatos.nombre}</Link>
                          </span>
                          <div className="desplegable">
                              <img src={avatar} alt="avatar del usuario"/>
                              <div className="desplegable-contenido">
                                  <Link to={`/usuario/${usuarioDatos.id}`}>Perfil</Link>
                                  <Link to="/auth/login" onClick={cerrarSesion}>Cerrar sesión</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </header>
    );
}
export default Header;