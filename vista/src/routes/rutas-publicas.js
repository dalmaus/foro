import Registro from "../views/Registro";
import Login from "../views/Login";
import React from "react";
import {Navigate} from "react-router-dom";

export default function RutasPublicas(){
    return [
        {
            path: "/",
            element: <Navigate to="/auth/login" replace />
        },
        {
            path: "auth/registro",
            element: <Registro />,
        },
        {
            path: "auth/login",
            element: <Login />,
        },
    ]
}