import {Link, useNavigate} from "react-router-dom";
import {createUsuario} from "../api/UsuarioApi";
import {useState} from "react";


export function Registro(){
    const navigate = useNavigate();
    const [formUsuario, setFormUsuario] = useState({
        nombre: "",
        correo: "",
        contrasenna: "",
    });
    async function handleSubmit(evento) {
        evento.preventDefault();
        const usuario = await createUsuario(formUsuario);
        if(usuario){
            navigate("/login");
        }else{
            console.log("Error al registrarse.")
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormUsuario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return(
      <div className="registro">
          <h1 className="titulo">¡Únete ya a nuestro foro!</h1>
          <div className="form-container">
              <form className="card-border" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="nombre">
                          Nombre de usuario
                      </label>
                      <input onChange={handleInputChange} value={formUsuario.nombre} name="nombre" className="input-div" type="text" id="nombre" pattern="[A-z0-9,.-_']{3,50}"/>
                  </div>
                  <div>
                      <label htmlFor="correo">
                          Email
                      </label>
                      <input onChange={handleInputChange} value={formUsuario.correo} name="correo" className="input-div" type="email" id="correo"/>
                  </div>
                  <div>
                      <label htmlFor="contrasenna">
                          Contraseña
                      </label>
                      <input onChange={handleInputChange} value={formUsuario.contrasenna} name="contrasenna" className="input-div" type="password" id="contrasenna"/>
                  </div>
                  <div>
                      <span>¿Ya estás registrado? <Link to={`/login`}>Loguéate</Link></span>
                  </div>
                  <div>
                      <button type="submit">
                          Registrarse
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default Registro;