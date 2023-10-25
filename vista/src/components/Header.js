import avatar from "../img/avatar.png";
import {Link} from "react-router-dom";

export function Header(){
    return(
      <header>
          <nav>
              <div className="flex-container">
                  <div className="inicio-link">
                      <div>
                          <Link to={`/`}>Inicio</Link>
                      </div>
                  </div>
                  <div className="nav-usuario">
                      <span>
                          <Link to={`/usuario/`}>NombreUsuario</Link>
                      </span>
                      <span><img src={avatar} alt="avatar del usuario"/></span>
                  </div>
              </div>
          </nav>
      </header>
    );
}
export default Header;