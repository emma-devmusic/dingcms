import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./components/views/Login";
import { Clinica } from "./components/views/Clinica";
import { Concejo } from "./components/views/Concejo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/clinica-giuliani",
        element: <Clinica />
    },
    {
        path: "/concejo-del-municipio",
        element: <Concejo />
    },
]);