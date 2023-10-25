import {Link} from "react-router-dom";

export function Login(){
    return(
        <div className="login">
            <h1 className="titulo">Accede al foro</h1>
            <div className="form-container">
                <form className="card-border">
                    <div>
                        <label htmlFor="nombre">
                            Nombre de usuario
                        </label>
                        <input className="input-div" type="text" id="nombre" pattern="[A-z0-9,.-_']{3,50}"/>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Contraseña
                        </label>
                        <input className="input-div" type="password" id="password"/>
                    </div>
                    <div className="login-link">
                        <span>¿Aún no te has registrado?</span>
                        <Link to={`/registro`}>Regístrate</Link>
                    </div>
                    <div>
                        <button type="submit" disabled>
                            Acceder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;