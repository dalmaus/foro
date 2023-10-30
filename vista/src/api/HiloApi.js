import urls, {tipos} from "./_constants";

export async function getHilo(hiloId){

    let hilo = {};

    await fetch(`${urls.HILO_ENDPOINT}?${tipos.HILO}=${hiloId}`, {credentials: 'include'})
        .then(respuesta => hilo = respuesta);
    return hilo;
}

export async function getHilosDeUsuario(){

    let hilos = [];

    await fetch(`${urls.USUARIO_HILOS_ENDPOINT}`, {credentials: 'include'})
        .then(respuesta => hilos = respuesta.json());
    return hilos;
}
export async function deleteHilo(id){
    let dato = {};
    await fetch(`${urls.HILO_DELETE_ENDPOINT}?hilo=${id}`, {credentials: 'include'})
        .then(respuesta => dato = respuesta.json());
    return dato;
}