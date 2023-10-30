import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import Root, {loader as rootLoader} from "../views/Root";
import React from "react";
import Error from "../views/Error";
import RutasPrivadas from "./rutas-privadas";
import RutasPublicas from "./rutas-publicas";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace/>,
    },
    {
        path: "/",
        loader: rootLoader,
        element: <Root />,
        //errorElement: <Error/>,
        children: RutasPrivadas(),
    },
    {
        element: <div><Outlet/></div>,
        children: RutasPublicas(),
    }

]);
export default router;