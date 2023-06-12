import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import PrivateRoute from "./PrivateRoute";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "selectedClass",
        element: (
          <PrivateRoute>
            <SelectedClass></SelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <PrivateRoute>
            <EnrolledClass></EnrolledClass>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
