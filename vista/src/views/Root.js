import {Outlet, useLoaderData} from "react-router-dom";
import Footer from "../components/Footer";
import {getUsuarioDatos} from "../api/UsuarioApi";
import Header from "../components/Header";

export async function loader(){
    return await getUsuarioDatos();
}

export default function Root() {
    const usuarioDatos = useLoaderData();

    if(usuarioDatos) {
        return (
            <>
                <Header usuarioDatos={usuarioDatos}/>
                <div id="detail">
                    <Outlet/>
                </div>
                <Footer/>
            </>
        );
    }else{
        return (
            <>
                <div id="detail">
                    <Outlet/>
                </div>
                <Footer/>
            </>
        );
    }
}