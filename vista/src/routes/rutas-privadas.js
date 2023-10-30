import React from "react";
import Error from "../views/Error";
import Home, {loader as homeLoader} from "../views/Home";
import Categoria, {loader as categoriaLoader} from "../views/Categoria";
import Hilo, {loader as hiloLoader} from "../views/Hilo";
import Usuario, {loader as usuarioLoader} from "../views/Usuario";
import Perfil, {loader as perfilLoader} from "../views/Perfil";
import PerfilHilos, {loader as perfilHilosLoader} from "../views/PerfilHilos";
import PerfilMensajes, {loader as perfilMensajesLoader} from "../views/PerfilMensajes";


export default function RutasPrivadas() {
    return [
        {
            path: "home",
            element: <Home />,
            loader: homeLoader,
            errorElement: <Error />,
        },
        {
            path: "categoria/:categoriaId",
            element: <Categoria/>,
            loader: categoriaLoader,
        },
        {
            path: "hilo/:hiloId",
            element: <Hilo/>,
            loader: hiloLoader,
        },
        {
            path: "usuario/:usuarioId",
            element: <Usuario/>,
            loader: usuarioLoader,
        },
        {
            path: "perfil",
            element: <Perfil />,
            loader: perfilLoader,
        },
        {
            path: "perfil/hilos",
            element: <PerfilHilos />,
            loader: perfilHilosLoader,
        },
        {
            path: "perfil/mensajes",
            element: <PerfilMensajes />,
            loader: perfilMensajesLoader,
        }
    ]
}