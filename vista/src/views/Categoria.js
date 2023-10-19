import {useLoaderData} from "react-router-dom";
import {getCategoria} from "../api/CategoriaApi";

export async function loader({params}) {

    const categoria = getCategoria(params.categoriaId);
    return categoria;
}

function Categoria(){
    const categoria = useLoaderData();
    return(
        <div>
            <h2>{categoria.nombre}</h2>
            <ListaHilos hilos={categoria.hilos}/>
        </div>
    );
}

function Hilo({hilo}){

    return(
        <div className="hilo-item">
            <div>
                <p>{hilo.titulo}</p>
            </div>
            <div>
                <p>{hilo.usuario.nombre}</p>
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
      <div className="lista-hilos">
          { hilosComponentes }
      </div>
    );
}


export default Categoria;