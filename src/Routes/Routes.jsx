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
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import AdminRoute from "./AdminRoute";
import MangeClasses from "../Pages/Dashboard/ManageClasses/MangeClasses";
import UserRoute from "./UserRoute";
import UpdateClasses from "../Pages/Dashboard/UpdateClasses/UpdateClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClass",
        element: (
          <UserRoute>
            <SelectedClass></SelectedClass>
          </UserRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <UserRoute>
            <EnrolledClass></EnrolledClass>
          </UserRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <UserRoute>
            <Payment></Payment>
          </UserRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      {
        path: "mangageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <MangeClasses></MangeClasses>
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "updateClasses/:id",
        element: (
          <InstructorRoute>
            <UpdateClasses></UpdateClasses>
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
    ],
  },
]);

export default router;
