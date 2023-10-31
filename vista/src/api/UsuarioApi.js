import urls, {tipos} from "./_constants";

export async function createUsuario(usuario){

    let usuarioRespuesta = {};

    await fetch(`${urls.USUARIO_CREATE_ENDPOINT}?nombre=${usuario.nombre}&contrasenna=${usuario.contrasenna}&correo=${usuario.correo}`, {credentials: 'include'})
        .then(respuesta => usuarioRespuesta = respuesta.json());
    return usuarioRespuesta;
}

export async function getUsuario(usuarioId){

    let usuario = {};

    await fetch(`${urls.USUARIO_ENDPOINT}?${tipos.USUARIO}=${usuarioId}`, {credentials: 'include'})
        .then(respuesta => usuario = respuesta.json());
    return usuario;
}
export async function getUsuarioDatos(){
    let usuario = {};

    await fetch(`${urls.USUARIO_DATOS_ENDPOINT}`, {credentials: 'include'})
        .then(respuesta => usuario = respuesta.json());
    return usuario;
}

export async function usuarioCerrarSesion(){
    let dato = {};
    await fetch(`${urls.USUARIO_CERRAR_SESION_ENDPOINT}`, {credentials: 'include'})
        .then(respuesta => dato = respuesta.json());
    return dato;
}
export async function updateUsuario(datos){
    console.log(datos);
    let dato = {};
    await fetch(`${urls.USUARIO_UPDATE_ENDPOINT}?bio=${datos.bio}&lugar=${datos.lugar}&correo=${datos.correo}`, {credentials: 'include'})
        .then(respuesta => dato = respuesta.json());
    return dato;
}