import urls, {tipos} from "./_constants";

export async function getCategoria(categoriaId){

    let categoria = {};

    await fetch(`${urls.CATEGORIA_ENDPOINT}?${tipos.CATEGORIA}=${categoriaId}`)
        .then(respuesta => categoria = respuesta);
    return categoria;
}