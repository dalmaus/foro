import {getUsuario} from "../api/UsuarioApi";
import {useLoaderData} from "react-router-dom";

export async function loader({params}) {
    const usuario = getUsuario(params.usuarioId);
    return usuario;
}

function Usuario(){
    const usuario = useLoaderData();
}

export default Usuario;