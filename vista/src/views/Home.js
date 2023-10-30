import {Link, useLoaderData} from "react-router-dom";
import {getCategorias} from "../api/CategoriaApi";

function Home(){
    const categorias = useLoaderData();

    return (
        <>
            <div className="card home">
                <h1 className="titulo">Categorías</h1>
                <ListaCategorias categorias={categorias}/>
            </div>
        </>
    );

}

export async function loader() {
    return getCategorias();
}

function ListaCategorias({ categorias }){

    const categoriaComponentes = [];

    categorias.forEach(categoria => {
            categoriaComponentes.push(
                <Categoria key={categoria.id} categoria={categoria}/>
            )
        }
    );

    return(
        <div className="lista">
            { categoriaComponentes }
        </div>
    );
}

function Categoria({ categoria }){

    const id = categoria.id;
    const nombre = categoria.nombre;
    const descripcion = categoria.descripcion;

    return(
        <div className="item">
            <h2><Link to={`/categoria/${id}`}>{ nombre }</Link></h2>
            <p className="descripcion">{ descripcion }</p>
        </div>
    );
}

export default Home;