import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import LetsLearn from "../Pages/LetsLearn";
import Lessons from "../Pages/Lessons";
import Tutorials from "../Pages/Tutorials";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateUserInfo from "../Pages/UpdateUserInfo";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },

            {
                path: "/learn",
                element: <LetsLearn></LetsLearn>,
                loader: ()=>fetch('/lesson_no.json')
            },

            {
                path: "/lesson/:lesson_no",
                element: <Lessons></Lessons>,
                loader: ()=>fetch('/spanish_vocabulary_data.json')
            },

            {
                path: "/tutorial",
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
            },

            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>,
            },

            {
                path: "/forgetPass",
                element: <ForgetPassword></ForgetPassword>,
            },

            {
                path: "/updateUser",
                element: <UpdateUserInfo></UpdateUserInfo>,
            }
        ]
    }
])

export default Router;