import {Link, useNavigate} from "react-router-dom";
import urls from "../api/_constants";
import {useState} from "react";

export function Login(){
    const [checked, setChecked] = useState(false);
    const [formDatos, setFormDatos] = useState({
        nombre: "usuario1",
        contrasenna: "password1",
    });

    const navigate = useNavigate();

    function onFormDatosChange(evento){
        const { name, value } = evento.target;
        if(name === "recuerdame"){ //recuerdame
            setChecked(!checked);
            formDatos.recuerdame = !checked;
        }else{
            setFormDatos((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    async function handleSubmit(evento) {
        evento.preventDefault();

        let login = false;
        await fetch(`${urls.LOGIN_ENDPOINT}`, {method: "POST", body: JSON.stringify(formDatos), credentials: "include"})
            .then(respuesta => respuesta.json()
                .then(respuesta => {
                    login = respuesta;
                })
            );
        if(login){
            navigate(0);
        }else{
            console.log("Login erróneo.")
        }
    }



    return (
        <div className="login">
            <h1 className="titulo">Accede al foro</h1>
            <div className="form-container">
                <form className="card-border" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">
                            Nombre de usuario
                        </label>
                        <input className="input-div" type="text" id="nombre" name="nombre"
                               defaultValue={formDatos.nombre}
                               onChange={(e) => onFormDatosChange(e)} pattern="[A-z0-9,.-_']{3,50}"/>
                    </div>
                    <div>
                        <label htmlFor="contrasenna">
                            Contraseña
                        </label>
                        <input className="input-div" type="password" id="contrasenna" name="contrasenna"
                               defaultValue={formDatos.contrasenna}
                               onChange={(e) => onFormDatosChange(e)}/>
                    </div>
                    <div className="recuerdame">
                        <input type='checkbox' name='recuerdame'  defaultChecked={checked}
                               onChange={(e) => onFormDatosChange(e)}/>
                        <label htmlFor="recuerdame">Recuérdame</label>
                    </div>
                    <div className="login-link">
                        <span>¿Aún no te has registrado?</span>
                        <Link to={`/auth/registro`}>Regístrate</Link>
                    </div>
                    <div>
                        <button type="submit">
                            Acceder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}


export default Login;