import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import CreateListing from "../Pages/CreateListing";
import Home from "../Pages/Home";
import Listing from "../Pages/Listing";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import SingIn from "../Pages/SingIn";
import SingOut from "../Pages/SingOut";
import UpdateListing from "../Pages/UpdateListing";

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
             path:'listing/:id',
             element:<Listing></Listing>
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
                element:
                    <Profile></Profile>
    
            },
            {
                path:'create-listing',
                element:<CreateListing></CreateListing>
            },
            {
                path:'update-listing/:id',
                element: <UpdateListing></UpdateListing>
            }
        ]
    }
])