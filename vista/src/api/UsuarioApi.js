import urls, {tipos} from "./_constants";

export async function getUsuario(usuarioId){

    let usuario = {};

    await fetch(`${urls.USUARIO_ENDPOINT}?${tipos.USUARIO}=${usuarioId}`)
        .then(respuesta => usuario = respuesta);
    return usuario;
}