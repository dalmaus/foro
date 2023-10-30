import {Outlet, redirect} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {estaAutorizado} from "../functions/functions";

export async function loader(){
    if(await estaAutorizado()){
        return null;
    }else{
        return redirect("/login");
    }
}

export default function Root() {

        return (
            <>
                <Header />
                <div id="detail">
                    <Outlet />
                </div>
                <Footer/>
            </>
        );
}