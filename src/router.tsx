import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./views/Login";
import { SelectPages } from "./views/SelectPages";
import { BlogsEdit } from "./views/BlogsEdit";
import { Profile } from "./views/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'pages',
                element: <SelectPages />
            },
            {
                path: '/pages/:id',
                element: <BlogsEdit />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);