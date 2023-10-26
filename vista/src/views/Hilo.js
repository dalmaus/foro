import {getHilo} from "../api/HiloApi";
import {useLoaderData} from "react-router-dom";

export async function loader({params}) {
    const hilo = getHilo(params.hiloId);
    return hilo;
}

function Hilo(){
    const hilo = useLoaderData();
    console.log(hilo)
}

export default Hilo;