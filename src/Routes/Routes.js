import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/pages/Appointment/Appointment/Appointment";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Home from '../components/pages/Home/Home'
import Login from "../components/pages/Login/Login";
import PrivateRoute from "../components/pages/PrivateRoute/PrivateRoute";
import Register from "../components/pages/Register/Register";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }

]);

export default router;