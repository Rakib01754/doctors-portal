import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/pages/Appointment/Appointment/Appointment";
import Home from '../components/pages/Home/Home'
import Login from "../components/pages/Login/Login";
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
                path: 'appointment',
                element: <Appointment></Appointment>
            }
        ]
    }

]);

export default router;