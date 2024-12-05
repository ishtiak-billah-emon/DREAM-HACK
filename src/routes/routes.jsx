import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../component/Services";
import ServiceDetails from "../component/ServiceDetails";
import LoginPage from "../component/LoginPage";
import SignUp from "../component/SignUp";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../pages/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import Courses from "../component/Courses";
import ForgetPassword from "../component/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: (
              <Navigate to="/category/Virtual Counseling Services" replace />
            ),
          },
          {
            path: "category/:category",
            element: <Services />,
          },
          {
            path: "category/:category/details",
            element: <ServiceDetails />,
          },
          {
            path: "category/service/:id",
            element: (
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
