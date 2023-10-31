import {Link, useLoaderData} from "react-router-dom";
import {parseaFecha} from "../functions/functions";
import {useState} from "react";
import {deleteMensaje, getMensajesDeUsuario} from "../api/MensajeApi";

export async function loader(){
    return await getMensajesDeUsuario();
}

export default function PerfilMensajes(){
    const mensajes = useLoaderData();
    const [mensajesData, setMensajesData] = useState(mensajes);

    if(mensajes.length > 0){
        return(
            <div className="perfil-hilos">
                <ListaMensajes mensajes={mensajesData} setMensajes={setMensajesData}/>
            </div>
        );
    }else{
        return(
            <div className="perfil-hilos">
                <div className="card-border">
                    <h3 className="error">Aún no hay mensajes</h3>
                </div>
            </div>

        );
    }
}

function Mensaje({mensaje, mensajes, setMensajes}){

    function borrarMensaje(evento) {

        const idMensajeBorrado = parseInt(evento.target.id);
        const mensajesTrasBorrado = [];
        mensajes.forEach(mensaje => {
            if(idMensajeBorrado !== mensaje.id){
                mensajesTrasBorrado.push(mensaje);
            }
        });
        deleteMensaje(idMensajeBorrado);
        setMensajes(mensajesTrasBorrado);
    }

    return(
        <div className="perfil-hilos-item card-border">
            <div className="titulo-button">
                <h4><Link to={`/mensaje/${mensaje.id}`}>{mensaje.contenido}</Link></h4>
                <button id={mensaje.id} onClick={borrarMensaje}>Borrar</button>
            </div>
            <div className="fecha">
                <span >{parseaFecha(mensaje.fecha)}</span>
            </div>
        </div>
    );
}

function ListaMensajes({mensajes, setMensajes}){

    if(mensajes.length > 0){
        let mensajesComponentes = [];

        mensajes.forEach(mensaje => {
            mensajesComponentes.push(<Mensaje key={mensaje.id} mensaje={mensaje} mensajes={mensajes} setMensajes={setMensajes}/>)
        });

        return(
            <ul>
                {mensajesComponentes}
            </ul>
        );
    }else{
        return(
            <div className="card-border no-mensajes">
                <h3 className="error">No hay mensajes</h3>
            </div>
        );
    }


}