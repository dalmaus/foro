import {createBrowserRouter, Navigate} from "react-router-dom";
import Root, {loader as rootLoader} from "../views/Root";
import React from "react";
import Error from "../views/Error";
import {estaAutorizado} from "../functions/functions";
import RutasPublicas from "./rutas-publicas";
import RutasPrivadas from "./rutas-privadas";

const router =  createBrowserRouter([
    {
        path: "*",
        element: <Navigate to="/" />
    },
    {
        path: "/",
        element: <Root/>,
        loader: rootLoader,
        errorElement: <Error/>,
        children: await estaAutorizado() ? RutasPrivadas() : RutasPublicas()
    }
]);
export default router;