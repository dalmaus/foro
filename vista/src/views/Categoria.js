import {Link, useLoaderData} from "react-router-dom";
import {getCategoria} from "../api/CategoriaApi";
import NuevoPost from "../components/NuevoPost";
import {useState} from "react";
import {parseaFecha} from "../functions/functions";

export async function loader({params}) {
    const categoria = getCategoria(params.categoriaId);
    return categoria;
}

function Categoria(){
    const categoriaDatos = useLoaderData();
    const [categoria, setCategoria] = useState(categoriaDatos);
    const goToNuevoPost = () => {
        const nuevoPost = document.getElementById("nuevo-post");
        nuevoPost.scrollIntoView({behavior: "smooth"});
    };
    return(
        <>
            <div className="categoria card">
                <div className="titulo-button">
                    <h2 className="titulo">{categoria.nombre}</h2>
                    <button onClick={goToNuevoPost}>Nuevo tema</button>
                </div>
                <ListaHilos hilos={categoria.hilos}/>
                <NuevoPost datos={categoria} setDatos={setCategoria}/>
            </div>
        </>
    );
}

function Hilo({hilo}){
    return(
        <div className="item">
            <div>
                <h3 className="titulo"><Link to={`/hilo/${hilo.id}`}>{hilo.titulo}</Link></h3>
            </div>
            <div className="usuario-fecha">
                <p><Link to={`/usuario/${hilo.usuario.id}`}>{hilo.usuario.nombre}</Link></p>
                <span>{parseaFecha(hilo.fecha)}</span>
            </div>
        </div>
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
            <div className="categoria lista">
                {hilosComponentes}
            </div>
        );
    }else{
        return (
            <div className="categoria lista">
                <h3 className="error">Aún no hay hilos en esta categoría</h3>
            </div>
        );
    }
}

export default Categoria;