import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllUsers from "../Layout/AllUsers/AllUsers";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Shares/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [ 
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);