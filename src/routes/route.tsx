import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import MainLayout from "../layout/MainlLayout";
import Home from "../page/Home";
import AllBooks from "../page/AllBooks";
import AddNewBooks from "../page/AddNewBooks";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <AllBooks />,
        path: "all-books",
      },
      {
        element: (
          <PrivateRoute>
            <AddNewBooks />
          </PrivateRoute>
        ),
        path: "add-new",
      },
      {
        element: <BookDetails />,
        path: "/book/:id",
      },
      {
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
        path: "/edit-book/:id",
      },
    ],
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
