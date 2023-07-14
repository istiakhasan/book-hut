import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";

const routes= createBrowserRouter([
    {
        element:<Login />,
        path:'/login'
    },
    {
        element:<SignUp />,
        path:'/login'
    },
    {
        path:"*",
        element:<h1>Not found</h1>
    }
])


export default routes