import {deleteHilo, getHilosDeUsuario} from "../api/HiloApi";
import {Link, useLoaderData} from "react-router-dom";
import {parseaFecha} from "../functions/functions";
import {useState} from "react";

export async function loader(){
    return await getHilosDeUsuario();
}

export default function PerfilHilos(){
    const hilos = useLoaderData();
    const [hilosData, setHilosData] = useState(hilos);


    return(
        <div className="perfil-hilos">
            <ListaHilos hilos={hilosData} setHilos={setHilosData}/>
        </div>
    );
}

function Hilo({hilo, hilos, setHilos}){

    function borrarHilo(evento) {

        const idHiloBorrado = parseInt(evento.target.id);
        const hilosTrasBorrado = [];
        hilos.forEach(hilo => {
            if(idHiloBorrado !== hilo.id){
                hilosTrasBorrado.push(hilo);
            }
        });
        deleteHilo(idHiloBorrado);
        setHilos(hilosTrasBorrado);
    }

    return(
        <div className="perfil-hilos-item card-border">
            <div className="titulo-button">
                <h4><Link to={`/hilo/${hilo.id}`}>{hilo.titulo}</Link></h4>
                <button id={hilo.id} onClick={borrarHilo}>Borrar</button>
            </div>
            <div className="fecha">
                <span >{parseaFecha(hilo.fecha)}</span>
            </div>
        </div>
    );
}

function ListaHilos({hilos, setHilos}){

    if(hilos.length > 0) {
        let hilosComponentes = [];

        hilos.forEach(hilo => {
            hilosComponentes.push(<Hilo key={hilo.id} hilo={hilo} hilos={hilos} setHilos={setHilos}/>)
        });

        return (
            <ul>
                {hilosComponentes}
            </ul>
        );
    }else{
        return(
            <div className="card-border">
                <h3 className="error">No hay hilos</h3>
            </div>
        )
    }
}