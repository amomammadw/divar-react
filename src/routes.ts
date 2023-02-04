import { RouteProps } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

export const routes: RouteProps[] = [
    {
        path: '/',
        element: Home()
    },
    {
        path: '/about',
        element: About()
    },
    {
        path: '/contact',
        element: Contact()
    },
] 