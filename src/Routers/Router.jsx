import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import SingIn from "../Pages/SingIn";
import SingOut from "../Pages/SingOut";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'singIn',
                element:<SingIn></SingIn>
            },
            {
                path:'singOut',
                element:<SingOut></SingOut>,
            },
            {
                path:'about',
                element:<About></About>
            }
        ]
    }
])