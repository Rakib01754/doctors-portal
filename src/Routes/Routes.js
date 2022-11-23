import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/pages/Appointment/Appointment/Appointment";

import MyAppointment from "../components/pages/Dashboard/MyAppointment";
import Home from '../components/pages/Home/Home'
import Login from "../components/pages/Login/Login";
import PrivateRoute from "../components/pages/PrivateRoute/PrivateRoute";
import Register from "../components/pages/Register/Register";
import Users from "../components/pages/Users/Users";
import DashboardLayout from "../layout/Main/DashboardLayout/DashboardLayout";
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>
            }
        ]
    }

]);

export default router;