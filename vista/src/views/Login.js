import {Link} from "react-router-dom";
import urls from "../api/_constants";
import {useState} from "react";



export function Login(){
    const [formDatos, setFormDatos] = useState({
        nombre: "",
        contrasenna: "",
        // Add more fields as needed
    });

    function onFormDatosChange(evento){
        const { name, value } = evento.target;
        setFormDatos((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function handleSubmit(evento) {
        evento.preventDefault();
        // await fetch(`${urls.LOGIN_EDNPOINT}`)
        //     .then(respuesta => respuesta.json()
        //         .then(hilo => {
        //             console.log(hilo)
        //         })
        //     );
    }

    return(
        <div className="login">
            <h1 className="titulo">Accede al foro</h1>
            <div className="form-container">
                <form className="card-border" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">
                            Nombre de usuario
                        </label>
                        <input className="input-div" type="text" id="nombre" name="nombre" defaultValue={formDatos.nombre}
                               onChange={(e) => onFormDatosChange(e)} pattern="[A-z0-9,.-_']{3,50}"/>
                    </div>
                    <div>
                        <label htmlFor="contrasenna">
                            Contraseña
                        </label>
                        <input className="input-div" type="password" id="contrasenna" name="contrasenna" defaultValue={formDatos.contrasenna}
                               onChange={(e) => onFormDatosChange(e)}/>
                    </div>
                    <div className="recuerdame">
                        <input type='checkbox' name='recuerdame'/>
                        <label htmlFor="recuerdame">Recuérdame</label>
                    </div>
                    <div className="login-link">
                        <span>¿Aún no te has registrado?</span>
                        <Link to={`/registro`}>Regístrate</Link>
                    </div>
                    <div>
                        <button type="submit" >
                            Acceder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login;