import {Link} from "react-router-dom";


function Categoria({ categoria }){

    const id = categoria.id;
    const nombre = categoria.nombre;
    const descripcion = categoria.descripcion;

    return(
        <div class="categoria-item">
            <h2><Link to={`/categoria/${id}`}>{ nombre }</Link></h2>
            <p>{ descripcion }</p>
        </div>
    );
}

function ListaCategorias({ categorias }){

    const categoriaComponents = [];

    categorias.forEach(categoria => {
            categoriaComponents.push(
                <Categoria categoria={categoria}/>
            )
        }
    );

    return(
        <div class="lista-categorias">
            { categoriaComponents }
        </div>
    );
}

function Home({ categorias }){

    return (
        <div>
            <h1>FORO - FORO</h1>
            <ListaCategorias categorias={ categorias } />
        </div>
    );
}

export default Home;