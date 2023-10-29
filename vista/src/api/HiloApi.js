import urls, {tipos} from "./_constants";

export async function getHilo(hiloId){

    let hilo = {};

    await fetch(`${urls.HILO_ENDPOINT}?${tipos.HILO}=${hiloId}`, {credentials: 'include'})
        .then(respuesta => hilo = respuesta);
    return hilo;
}