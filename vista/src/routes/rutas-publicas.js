import Registro from "../views/Registro";
import Login from "../views/Login";
import React from "react";
import {Navigate} from "react-router-dom";
import {cerrarSesion, redirectSiLogueado} from "../functions/functions";

export default function RutasPublicas(){
    return [
        {
            path: "/login",
            element: <Login />,
            loader: redirectSiLogueado,
        },
        {
            path: "/registro",
            element: <Registro />,
            loader: redirectSiLogueado,
        },
        {
            path: "/logout",
            element: <Navigate to="/login" />,
            loader: cerrarSesion
        },

    ]
}