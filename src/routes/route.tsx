import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import MainLayout from "../layout/MainlLayout";
import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    path:"/",
    children:[
        {
            element:<Home />,
            index:true
        }
    ]

  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export default routes;
