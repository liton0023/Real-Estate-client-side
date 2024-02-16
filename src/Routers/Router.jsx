import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import CreateListing from "../Pages/CreateListing";
import Home from "../Pages/Home";
import Listing from "../Pages/Listing";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SingIn";
import UpdateListing from "../Pages/UpdateListing";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
             path:'listing/:listingId',
             element:<Listing></Listing>
            },
            {
                path:'signIn',
                element:<SignIn></SignIn>
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
                element:(
                    <Profile></Profile>
                )
            },
            {
                path:'create-listing',
                element:(
                    <CreateListing></CreateListing>
                )

            },
            {
                path:'update-listing/:listingId',
                element:(
                    <UpdateListing></UpdateListing>
                )
            },
            {
                path:'search',
                element:<Search></Search>
            }
        ]
    },

])