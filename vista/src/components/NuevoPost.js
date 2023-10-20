function NuevoPost({datos}) {
    return (
        <div class="nuevo-post">
            <form>
                <div>
                    {datos &&
                        <input hidden name="id" value={datos} />
                    }

                    <div>
                        <label for="titulo" >Título</label>
                        <input name="titulo" type="text"/>
                    </div>
                    <div>
                        <label for="contenido">Contenido</label>
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