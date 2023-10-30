import {getUsuarioDatos, updateUsuario} from "../api/UsuarioApi";
import avatar from "../img/avatar.png";
import {Link, useLoaderData} from "react-router-dom";
import {useState} from "react";

export async function loader(){
    return await getUsuarioDatos();
}
export default function Perfil(){

    const usuarioDatos = useLoaderData();

    const [datosForm, setDatosFrom] = useState(usuarioDatos);
    function updateUsuarioDetalles(evento) {
        const {name, value} = evento.target;
        let datosFormCambio = {...datosForm};
        if(name === "bio"){
            datosFormCambio.bio = value;
        }else if(name === "lugar"){
            datosFormCambio.lugar = value;
        }else{
            datosFormCambio.correo = value;
        }

        if(evento.target.checkValidity()){
            updateUsuario(datosFormCambio);
        }
        setDatosFrom(datosFormCambio);

    }

    return (
        <div className="perfil">
            <div className="perfil card-border">
                <div className="perfil-img">
                    <img src={avatar} alt="avatar usuario"/>
                </div>
                <div className="perfil-nombre">
                    <span><Link to={`/usuario/${usuarioDatos.id}`}>{usuarioDatos.nombre}</Link></span>
                </div>
                <form>
                    <div className="perfil-bio">
                        <label>Bio</label>
                        <input type="text" name="bio" onChange={updateUsuarioDetalles} defaultValue={usuarioDatos.bio} placeholder="Escribe una breve biografía..."/>
                    </div>
                    <div className="perfil-lugar">
                        <label>Lugar</label>
                        <input type="text" name="lugar" onChange={updateUsuarioDetalles} defaultValue={usuarioDatos.lugar} placeholder="¿De dónde eres?"/>
                    </div>
                    <div className="perfil-correo">
                        <label>Correo</label>
                        <input type="email" name="correo" onChange={updateUsuarioDetalles} defaultValue={usuarioDatos.correo} placeholder="Correo"/>
                    </div>
                </form>
            </div>
        </div>
    );
}