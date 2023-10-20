import {Link, useLoaderData} from "react-router-dom";
import {getCategoria} from "../api/CategoriaApi";
import NuevoPost from "../components/NuevoPost";

export async function loader({params}) {
    const categoria = getCategoria(params.categoriaId);
    return categoria;
}

function Categoria(){
    const categoria = useLoaderData();
    return(
        <div className="categoria card">
            <div className="titulo-button">
                <h2 className="titulo">{categoria.nombre}</h2>
                <button>Nuevo tema</button>
            </div>
            <ListaHilos hilos={categoria.hilos}/>
            <NuevoPost datos={categoria.id}/>
        </div>
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
                <span>{hilo.fecha}</span>
            </div>
        </div>
    );
}

function ListaHilos({hilos}){

    const hilosComponentes = [];

    hilos.forEach(hilo => {
            hilosComponentes.push(
                <Hilo key={hilo.id} hilo={hilo} />
            )
        }
    );

    return(
      <div className="categoria lista">
          { hilosComponentes }
      </div>
    );
}

export default Categoria;