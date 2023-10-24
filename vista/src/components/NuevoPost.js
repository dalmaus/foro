
function NuevoPost({datos, setDatos}) {

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const contenido = evento.target.contenido.value;
        await fetch(`http://localhost/EntornoServidor/foro/controlador/hilo/Create.php?usuario_id=1&categoria_id=1&titulo=${titulo}&contenido=${contenido}`)
            .then(respuesta => respuesta.json()
                .then(hilo => {
                    datos.hilos.push(hilo);
                    setDatos({...datos});
                })
            );
        evento.target.reset();
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
                            <input hidden name="categoria_id" value={datos.id} />
                        }
                        <input hidden name="usuario_id" value="1" />
                        <div className="input-div">
                            <input placeholder="Titulo..." name="titulo" type="text" pattern="[A-z0-9,.\-'+`;@]{3,}"/>
                        </div>
                        <div className="input-div">
                            <textarea name="contenido" type="text" rows="7" placeholder="Escribe aquí tu mensaje..."/>
                        </div>
                        <div className="button-div">
                            <button type="submit" disabled>
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