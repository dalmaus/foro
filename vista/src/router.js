import {createBrowserRouter} from "react-router-dom";
import Root from "./views/Root";
import Home, {loader as homeLoader} from "./views/Home";
import Categoria, {loader as categoriaLoader} from "./views/Categoria";
import Hilo, {loader as hiloLoader} from "./views/Hilo";
import Usuario, {loader as usuarioLoader} from "./views/Usuario";
import Registro from "./views/Registro";
import Login from "./views/Login";
import React from "react";
import Error from "./views/Error";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
            path: "/",
            element: <Home />,
            loader: homeLoader,
            errorElement: <Error />,
        },
            {
                path: "categoria/:categoriaId",
                element: <Categoria />,
                loader: categoriaLoader,
            },
            {
                path: "hilo/:hiloId",
                element: <Hilo />,
                loader: hiloLoader,
            },
            {
                path: "usuario/:usuarioId",
                element: <Usuario />,
                loader: usuarioLoader,
            },
            {
                path: "registro",
                element: <Registro />,
            },
            {
                path: "login",
                element: <Login />,
            }
        ],
    },
]);
export default router;