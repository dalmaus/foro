import Error from "../views/Error";
import Home, {loader as homeLoader} from "../views/Home";
import Categoria, {loader as categoriaLoader} from "../views/Categoria";
import Hilo, {loader as hiloLoader} from "../views/Hilo";
import Usuario, {loader as usuarioLoader} from "../views/Usuario";
import React from "react";
import {Navigate} from "react-router-dom";

export default function RutasPrivadas() {
    return [
        {
            path: "/",
            element: <Navigate to="/home" replace/>,
        },
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
            path: "/auth/registro",
            element: <Navigate to="/" replace/>
        },
        {
            path: "/auth/login",
            element: <Navigate to="/" replace/>
        }
    ]

}