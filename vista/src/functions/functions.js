import urls from "../api/_constants";

export function parseaFecha(fecha){
    const fechaParseada = new Date(fecha);
    const fechaActual = new Date(Date.now());

    const tiempoDesdeMensaje =  new Date(Math.abs(fechaActual - fechaParseada));
    if(tiempoDesdeMensaje.getFullYear() === 1970 && tiempoDesdeMensaje.getMonth() < 1 && tiempoDesdeMensaje.getDate() <= 2) { //si es hoy o ayer
        return (fechaParseada.getDate() !== fechaActual.getDate()) //si ha se ha pasado de las 0h
            ? `Ayer, ${fechaParseada.getHours()}:${fechaParseada.getMinutes() < 10 ? "0"+fechaParseada.getMinutes() : fechaParseada.getMinutes()}`
            : `Hoy, ${fechaParseada.getHours()}:${fechaParseada.getMinutes() < 10 ? "0"+fechaParseada.getMinutes() : fechaParseada.getMinutes()}`
            ;
    }else{
        return `${fechaParseada.toLocaleDateString()} ${fechaParseada.getHours()}:${fechaParseada.getMinutes() < 10 ? "0"+fechaParseada.getMinutes() : fechaParseada.getMinutes()}`;
    }
}

export async function estaAutorizado(){

    let autorizado = {};

    await fetch(urls.USUARIO_AUTENTICADO_ENDPOINT, {credentials: 'include'}).then(respuesta => autorizado = respuesta.json());
    return autorizado;
}