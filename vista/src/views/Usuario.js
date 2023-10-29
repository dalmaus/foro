import {getUsuario} from "../api/UsuarioApi";
import {Link, useLoaderData} from "react-router-dom";
import ListaMensajes from "../components/ListaMensajes";
import avatar from "../img/avatar.png";
import {parseaFecha} from "../functions/functions";
import Header from "../components/Header";

export async function loader({params}) {
    const usuario = getUsuario(params.usuarioId);
    return usuario;
}

function Usuario(){
    const usuario = useLoaderData();
    return(
        <>
              <Header />
              <div className="usuario">
                <div className="datos-usuario">
                    <div className="avatar">
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className="nombre-usuario">
                        <span>{usuario.nombre}</span>
                    </div>
                </div>
                <div className="mensajes-hilos">
                      <div className="usuario-hilos">
                          <div className="titulo">
                              <h4>Últimos hilos creados</h4>
                          </div>
                          <ListaHilos hilos={usuario.hilos}/>
                      </div>
                    <div className="usuario-mensajes">
                        <div className="titulo">
                            <h4>Mensajes más recientes</h4>
                        </div>
                        <ListaMensajes usuario={usuario} mensajes={usuario.mensajes}/>
                    </div>
                </div>
              </div>
        </>
    );
}

function Hilo({hilo}){
    return(
        <li className="usuario-hilo-item">
            <div className="card-border">
                <div className="item-parte-superior">
                    <h5 className="titulo"><Link to={`/hilo/${hilo.id}`}>{hilo.titulo}</Link></h5>
                    <span className="hilo-categoria">
                        <Link to={`/categoria/${hilo.id}`}>{hilo.categoria.nombre}</Link>
                    </span>
                </div>
                <div>
                    <span className="usuario-fecha">{parseaFecha(hilo.fecha)}</span>
                </div>
            </div>
        </li>
    );
}

function ListaHilos({hilos}){

    const hilosComponentes = [];

    if(hilos.length > 0) {
        hilos.forEach(hilo => {
                hilosComponentes.push(
                    <Hilo key={hilo.id} hilo={hilo}/>
                )
            }
        );
        return (
            <ul>
                {hilosComponentes}
            </ul>
        );
    }else{
        return (
            <div>
                <h3 className="error">Aún no hay hilos creados.</h3>
            </div>
        );
    }
}

export default Usuario;