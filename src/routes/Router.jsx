import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/auth',
        element: <h2>Authentication layout</h2>
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '*',
        element: <h2>Error 404</h2>
    }
])