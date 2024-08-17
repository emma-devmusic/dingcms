import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./views/Login";
import { SelectPages } from "./views/SelectPages";
import { BlogsEdit } from "./views/BlogsEdit";
import { Profile } from "./views/Profile";
import { BlogsPage } from "./views/BlogsPage";
import { Welcome } from "./views/Welcome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Welcome />
            },
            {
                path: 'pages',
                element: <SelectPages />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/pages/entity-selected/blogs',
                element: <BlogsPage />
            },
            {
                path: '/pages/entity-selected/blog-settings',
                element: <BlogsEdit />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);