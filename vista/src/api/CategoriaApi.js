import urls, {tipos} from "./_constants";

export async function getCategorias(){

    let categorias = [];

    await fetch(urls.CATEGORIAS_ENDPOINT, {credentials: 'include'})
        .then(respuesta => categorias = respuesta);
    return categorias;
}
export async function getCategoria(categoriaId){

    let categoria = {};

    await fetch(`${urls.CATEGORIA_ENDPOINT}?${tipos.CATEGORIA}=${categoriaId}`, {credentials: 'include'})
        .then(respuesta => categoria = respuesta);
    return categoria;
}