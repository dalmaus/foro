import urls from "./_constants";

export async function deleteMensaje(id){
    let dato = {};
    await fetch(`${urls.MENSAJE_DELETE_ENDPOINT}?mensaje=${id}`, {credentials: 'include'})
        .then(respuesta => dato = respuesta.json());
    return dato;
}
export async function getMensajesDeUsuario(){

    let mensajes = [];

    await fetch(`${urls.USUARIO_MENSAJES_ENDPOINT}`, {credentials: 'include'})
        .then(respuesta => mensajes = respuesta.json());
    return mensajes;
}