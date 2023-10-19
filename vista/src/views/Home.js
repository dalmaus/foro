import {Link, useLoaderData} from "react-router-dom";

function Home(){

    const categorias = useLoaderData();

    return (
        <div className="home">
            <h1>FORO</h1>
            <ListaCategorias categorias={ categorias } />
        </div>
    );
}

export function loader() {
    const categorias = [{"id":1,"nombre":"General","descripcion":"Cuestiones generales, información y dudas sobre temas menos específicos","hilos":null},{"id":2,"nombre":"Política","descripcion":"Debate sobre asuntos gubernamentales y políticos de actualidad.","hilos":null},{"id":3,"nombre":"Deportes","descripcion":"Comparte noticias y resultados de tus deportes favoritos.","hilos":null},{"id":4,"nombre":"Videojuegos","descripcion":"Discute juegos, trucos y consejos con otros jugadores.","hilos":null},{"id":5,"nombre":"Música","descripcion":"Explora géneros, artistas y comparte tus canciones.","hilos":null}]
    return categorias;
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
        <div className="lista-categorias">
            { categoriaComponentes }
        </div>
    );
}

function Categoria({ categoria }){

    const id = categoria.id;
    const nombre = categoria.nombre;
    const descripcion = categoria.descripcion;

    return(
        <div className="categorias-item">
            <h2><Link to={`/categorias/${id}`}>{ nombre }</Link></h2>
            <p className="descripcion">{ descripcion }</p>
        </div>
    );
}


export default Home;