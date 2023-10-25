import {Link} from "react-router-dom";

function handleSubmit() {

}
export function Registro(){
    return(
      <div className="registro">
          <h1 className="titulo">¡Únete ya a nuestro foro!</h1>
          <div className="form-container">
              <form className="card-border" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="nombre">
                          Nombre de usuario
                      </label>
                      <input className="input-div" type="text" id="nombre" pattern="[A-z0-9,.-_']{3,50}"/>
                  </div>
                  <div>
                      <label htmlFor="email">
                          Email
                      </label>
                      <input className="input-div" type="email" id="email"/>
                  </div>
                  <div>
                      <label htmlFor="password">
                          Contraseña
                      </label>
                      <input className="input-div" type="password" id="password"/>
                  </div>
                  <div>
                      <span>¿Ya estás registrado? <Link to={`/login`}>Loguéate</Link></span>
                  </div>
                  <div>
                      <button type="submit" disabled>
                          Registrarse
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default Registro;