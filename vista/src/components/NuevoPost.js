
function NuevoPost({datos, setDatos}) {

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const contenido = evento.target.contenido.value;
        await fetch(`http://localhost/EntornoServidor/foro/controlador/hilo/Create.php?categoria_id=${datos.id}&titulo=${titulo}&contenido=${contenido}`, {credentials: 'include'})
            .then(respuesta => respuesta.json()
                .then(hilo => {
                    datos.hilos.push(hilo);
                    setDatos({...datos});
                })
            );
        evento.target.reset();
    }
    function onFormularioChange(evento){
        const titulo = document.querySelector("#titulo");
        const contenido = document.querySelector("#contenido");
        const boton = document.querySelector("#nuevo-tema-button");

        if(titulo.value.length > 2 && contenido.value.length > 2 ){

            boton.removeAttribute("disabled");
        }else{
            boton.setAttribute("disabled", true);
        }
    }
    return (
        <div>
            <div className="separador"></div>
            <div id="nuevo-post" className="nuevo-post">
                <div>
                    <span>Crear un nuevo tema</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        {datos &&
                            <input hidden name="categoria_id" defaultValue={datos.id} />
                        }
                        <input hidden name="usuario_id" defaultValue="1" />
                        <div className="input-div">
                            <input id="titulo" placeholder="Titulo..." name="titulo" type="text" pattern="[A-z0-9,.\-'+`;@]{3,}" onChange={onFormularioChange}/>
                        </div>
                        <div className="input-div">
                            <textarea id="contenido" name="contenido" rows="7" placeholder="Escribe aquí tu mensaje..." onChange={onFormularioChange}/>
                        </div>
                        <div className="button-div">
                            <button id="nuevo-tema-button" type="submit" disabled>
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default NuevoPost;