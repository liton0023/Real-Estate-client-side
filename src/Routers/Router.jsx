import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import SingIn from "../Pages/SingIn";
import SingOut from "../Pages/SingOut";
import PrivetRoute from "../components/PrivetRoute";

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
                path:'signIn',
                element:<SingIn></SingIn>
            },
            {
                path:'singOut',
                element:<SingOut></SingOut>,
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'profile',
                element:<PrivetRoute>
                    <Profile></Profile>
                </PrivetRoute>
            }
        ]
    }
])