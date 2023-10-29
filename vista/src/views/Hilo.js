import {getHilo} from "../api/HiloApi";
import {Link, useLoaderData} from "react-router-dom";
import {parseaFecha} from "../functions/functions";
import {useState} from "react";
import NuevoMensaje from "../components/NuevoMensaje";

export async function loader({params}) {
    return await getHilo(params.hiloId);
}

function Hilo(){
    const hiloDatos = useLoaderData();
    const [hilo, setHilo] = useState(hiloDatos);
    function goToNuevoMensaje(){
        const nuevoMensaje = document.getElementById("nuevo-mensaje");
        nuevoMensaje.scrollIntoView({behavior: "smooth"});
    }
    return(
        <>
          <div className="hilo card">
              <div className="titulo-button">
                  <h4 className="titulo">{hilo.titulo}</h4>
                  <button onClick={goToNuevoMensaje}>Nuevo mensaje</button>
              </div>
              <ListaMenajes mensajes={hilo.mensajes} />
              <NuevoMensaje hilo={hilo} setHilo={setHilo}/>
          </div>
        </>
    );
}
function Mensaje({mensaje, index}){
    return(
        <li className="hilo-mensaje"  >
            <div className="card-border">
                <div className="usuario-fecha">
                    <div>
                        <div>
                            <span><b><Link to={`/usuario/${mensaje.usuario_id}`}>{mensaje.usuario.nombre}</Link></b></span>
                        </div>
                        <div>
                            <span className="fecha">{parseaFecha(mensaje.fecha)}</span>
                        </div>
                    </div>
                    <div>
                        <span>{index + 1}</span>
                    </div>
                </div>
                <div>
                    <p>{mensaje.contenido}</p>
                </div>
            </div>
        </li>
    );
}
function ListaMenajes({mensajes}){

    if(mensajes.length > 0) {
        let mensajesComponente = [];
        mensajes.forEach((mensaje, index) =>{
            mensajesComponente.push(<Mensaje key={mensaje.id} mensaje={mensaje} index={index} />)
        });
        return (
            <ul>
                {mensajesComponente}
            </ul>
        );
    }else{
        return (
            <div className="card-border">
                <h3 className="error">Aún no hay mensajes en este hilo</h3>
            </div>

        );
    }
}

export default Hilo;