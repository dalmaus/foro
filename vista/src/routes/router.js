import {createBrowserRouter} from "react-router-dom";
import Root from "../views/Root";
import React from "react";
import Error from "../views/Error";
import {estaAutorizado} from "../functions/functions";
import RutasPublicas from "./rutas-publicas";
import RutasPrivadas from "./rutas-privadas";

const router =  createBrowserRouter([{

    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: await estaAutorizado() ? RutasPrivadas() : RutasPublicas()

}]);
export default router;