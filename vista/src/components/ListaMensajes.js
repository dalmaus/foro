import avatar from "../img/avatar.png";

function Mensaje({datosMensaje}) {
    return (
        <li>
            <div className="mensaje card-border">
                <div>
                    <div>
                        <img src={avatar} alt="avatar-usuario"/>
                        <span>{"nombre-usuario"}</span>
                        <span>{datosMensaje.fecha}</span>
                    </div>
                    <button className="menu-button">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true">
                            <path
                                d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        </svg>
                    </button>
                </div>

                <div>
                    <span>{"contenido mensaje"}</span>
                </div>
            </div>
        </li>
    );
}

export function ListaMensajes({mensajes}){
    const mensajesComponentes = [];
    mensajes.forEach(mensaje => {
        mensajesComponentes.push(<Mensaje key={mensaje.id} datosMensaje={mensaje}/>)
    });
    return(
        <ul className="lista-mensajes">
            {mensajesComponentes}
        </ul>
    );
}

export default ListaMensajes;