export const urlApi = "http://localhost/EntornoServidor/foro/controlador";
export const urlVista = "http://localhost/EntornoServidor/foro/vista";

//VISTAS
export const VISTAS = {

    hiloVista : "/hilo.html",
    usuarioVista : "/usuario.html",
}

//ENDPOINTS
export const ENDPOINTS = {
    categoriaIndex : "/categoria/List.php", //all
    categoriaHilos : "/categoria/CategoriaHilosConUsuarioList.php",
    hiloMensajes : "/hilo/HiloMensajesConUsuarioList.php",
 }

export async function obtenEndpoint(endpoint, query = "") {
    const respuesta = await fetch(urlApi + endpoint + query);
    return await respuesta.json();
}

export async function obtenDatos(tipoEntidad, endpoint){
    const url = new URL(location.href);
    const id = url.searchParams.get(tipoEntidad); //el nombre de la entidad devuelve el id

    const datos = await obtenEndpoint(endpoint, `?${tipoEntidad}=${id}`);

    return datos;
}

export async function printCategorias(){
    const list = document.getElementById("lista-categoria");
    const categorias = await obtenEndpoint(ENDPOINTS.categoriaIndex);

    for(let categoria of categorias){
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.classList.add("list-item");
        const catName = document.createElement("h2");
        const anchor = document.createElement("a");
        anchor.href = `categoria.html?categoria=${categoria.id}`;

        anchor.textContent = categoria.nombre;
        const catDesc = document.createElement("p");
        catDesc.textContent = categoria.descripcion;

        list.appendChild(li);
        li.appendChild(div);
        div.appendChild(catName);
        catName.appendChild(anchor);
        div.appendChild(catDesc);
    }
}

function creaLink(texto, href, clase = "", id = ""){ //anchor
    const link = document.createElement("a");
    link.textContent = texto;
    link.href = href;
    link.id = id;
    if(clase) link.classList.add(clase);
    return link;
}

function creaDiv(texto = "", clase = "", id = ""){ //anchor
    const div = document.createElement("div");
    div.textContent = texto;
    if(id) div.id = id;
    if(clase) div.classList.add(clase);
    return div;
}

function creaParrafo(texto, clase = "", id = ""){ //anchor
    const p = document.createElement("p");
    p.textContent = texto;
    if(id) p.id = id;
    if(clase) p.classList.add(clase);
    return p;
}

export function printCategoriaHilos(categoria){
    const titulo = document.querySelector(".categoria-titulo h1");
    const listaHilos = document.querySelector(".lista-hilos");

    titulo.textContent = categoria.nombre;

    for(let hilo of categoria.hilos){
        const listaItem = creaDiv("", "lista-item");
        const topDiv = creaDiv();
        const bottomDiv = creaDiv();
        const tituloHiloLink = creaLink(hilo.titulo, urlVista + VISTAS.hiloVista + `?hilo=${hilo.id}`);
        const usuarioHiloLink = creaLink(hilo.usuario.nombre, urlVista + VISTAS.usuarioVista + `?usuario=${hilo.usuario.id}`);

        topDiv.appendChild(tituloHiloLink);
        bottomDiv.appendChild(usuarioHiloLink);
        listaItem.appendChild(topDiv);
        listaItem.appendChild(bottomDiv);
        listaHilos.appendChild(listaItem);

    }
}
export function printHilo(hilo){
    const hiloTitulo = document.querySelector(".titulo-hilo h1");
    hiloTitulo.textContent = hilo.titulo;

}