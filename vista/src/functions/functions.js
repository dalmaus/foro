export function parseaFecha(fecha){
    const fechaParseada = new Date(fecha);
    const fechaActual = new Date(Date.now());

    const tiempoDesdeMensaje =  new Date(Math.abs(fechaActual - fechaParseada));
    if(tiempoDesdeMensaje.getDate() === 1){
        return (fechaParseada.getHours() <= fechaActual.getHours()) //si ha se ha pasado de las 0h
            ? `Hoy, ${fechaParseada.getHours()}:${fechaParseada.getMinutes()}`
            : `Ayer, ${fechaParseada.getHours()}:${fechaParseada.getMinutes()}`
            ;
    }

    return fechaParseada.toLocaleDateString();
}