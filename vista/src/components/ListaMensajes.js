import {parseaFecha} from "../functions/functions";

function MensajeUsuario({usuario, mensaje}) { //para la página de usuario
    return (
        <li>
            <div className="mensaje card-border">
                <div>
                    <div>
                        <span className="nombre-usuario">{usuario.nombre}</span>
                        <span className="usuario-fecha">{parseaFecha(mensaje.fecha)}</span>
                    </div>
                    <button className="menu-button">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true">
                            <path
                                d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        </svg>
                    </button>
                </div>

                <div className="contenido">
                    <span>{mensaje.contenido}</span>
                </div>
            </div>
        </li>
    );
}
export function ListaMensajes({usuario, mensajes}){
    const mensajesComponentes = [];
    mensajes.forEach(mensaje => {
        mensajesComponentes.push(<MensajeUsuario key={mensaje.id} usuario={usuario} mensaje={mensaje}/>)
    });
    return(
        <ul className="lista-mensajes">
            {mensajesComponentes}
        </ul>
    );
}
export default ListaMensajes;