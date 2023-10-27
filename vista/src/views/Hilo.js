import {getHilo} from "../api/HiloApi";
import {Link, useLoaderData} from "react-router-dom";
import {parseaFecha} from "../functions/functions";

export async function loader({params}) {
    return getHilo(params.hiloId);
}

function Hilo(){
    const hilo = useLoaderData();
    return(
      <div className="hilo card">
          <div className="titulo-button">
              <h4 className="titulo">{hilo.titulo}</h4>
              <button>Nuevo mensaje</button>
          </div>
          <ListaMenajes mensajes={hilo.mensajes} />
          <NuevoPost />
      </div>
    );
}
function Mensaje({mensaje}){
    return(
        <li className="hilo-mensaje">
            <div className="card-border">
                <div className="usuario-fecha">
                    <div>
                        <span><b><Link to={`/usuario/${mensaje.usuario_id}`}>{mensaje.usuario.nombre}</Link></b></span>
                    </div>
                    <div>
                        <span className="fecha">{parseaFecha(mensaje.fecha)}</span>
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
    let mensajesComponente = [];
    mensajes.forEach(mensaje =>{
        mensajesComponente.push(<Mensaje key={mensaje.id} mensaje={mensaje} />)
    });
    return(
      <ul>
          {mensajesComponente}
      </ul>
    );
}

function NuevoPost({datos, setDatos}) {

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const contenido = evento.target.contenido.value;
        await fetch(`http://localhost/EntornoServidor/foro/controlador/hilo/Create.php?usuario_id=1&categoria_id=1&titulo=${titulo}&contenido=${contenido}`)
            .then(respuesta => respuesta.json()
                .then(hilo => {
                    datos.hilos.push(hilo);
                    setDatos({...datos});
                })
            );
        evento.target.reset();
    }
    return (
        <div>
            <div className="separador"></div>
            <div id="nuevo-post" className="nuevo-post">
                <div>
                    <span>Nuevo mensaje</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        {datos &&
                            <input hidden name="categoria_id" defaultValue={datos.id} />
                        }
                        <input hidden name="usuario_id" defaultValue="1" />
                        <div className="input-div">
                            <textarea name="contenido" type="text" rows="7" placeholder="Escribe aquí tu mensaje..."/>
                        </div>
                        <div className="button-div">
                            <button type="submit" disabled>
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hilo;