export default function NuevoMensaje({hilo, setHilo}) {
    function onFormularioChange(evento) {
        const contenido = document.querySelector("#contenido");
        const boton = document.querySelector("#nuevo-mensaje-button");

        if (contenido.value.length > 2) {
            boton.removeAttribute("disabled");
        } else {
            boton.setAttribute("disabled", true);
        }
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const contenido = evento.target.contenido.value;

        await fetch(`http://localhost/EntornoServidor/foro/controlador/mensaje/Create.php?hilo_id=${hilo.id}&contenido=${contenido}`, {credentials: 'include'})
            .then(respuesta => respuesta.json()
                .then(mensaje => {
                    hilo.mensajes.push(mensaje);
                    setHilo({...hilo});
                })
            );
        const boton = document.querySelector("#nuevo-mensaje-button");
        boton.setAttribute("disabled", "");
        evento.target.reset();

    }

    return (
        <div>
            <div className="separador"></div>
            <div id="nuevo-post" className="nuevo-post">
                <div>
                    <span>Nuevo mensaje</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id="nuevo-mensaje">
                        <div className="input-div">
                            <textarea id="contenido" name="contenido" type="text" rows="7" placeholder="Escribe aquí tu mensaje..." onChange={onFormularioChange}/>
                        </div>
                        <div className="button-div">
                            <button id="nuevo-mensaje-button" type="submit" disabled>
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}