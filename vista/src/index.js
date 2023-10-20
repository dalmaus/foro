import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, {loader as homeLoader} from "./views/Home";
import Categoria, {loader as categoriaLoader} from "./views/Categoria";
import Root from "./views/Root";
import Hilo, {loader as hiloLoader} from "./views/Hilo";
import Usuario, {loader as usuarioLoader} from "./views/Usuario"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>Algo ha ido mal</div>,
        children: [{
            path: "/",
            element: <Home />,
            loader: homeLoader,
            errorElement: <div>Algo ha ido mal</div>,
            },
            {
                path: "categorias/:categoriaId",
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
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
