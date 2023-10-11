const urlApi = "http://localhost";
const categoriaIndexEndpoint = "/EntornoServidor/foro/controlador/categoria/";

async function fetchEndpoint(endpoint) {
    const response = await fetch(urlApi + endpoint);
    return await response.json();
}
export async function printCategorias(){
    const list = document.getElementById("list-categorias");
    const categorias = await fetchEndpoint(categoriaIndexEndpoint);

    for(let categoria of categorias){
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.classList.add("list-item");
        const catName = document.createElement("h2");
        const anchor = document.createElement("a");
        anchor.href = `../categoria?categoria=${categoria.id}`;

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