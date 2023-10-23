
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
    }
    return (
        <div class="nuevo-post">
            <div>
                <p>Crear un nuevo tema</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    {datos &&
                        <input hidden name="categoria_id" value={datos.id} />
                    }
                    <input hidden name="usuario_id" value="1" />
                    <div>
                        <label htmlFor="titulo" >Título</label>
                        <input name="titulo" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="contenido">Contenido</label>
                        <textarea name="contenido" type="text"/>
                    </div>
                    <div>
                        <button type="submit">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NuevoPost;