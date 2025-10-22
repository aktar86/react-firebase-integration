import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import PrivetRoute from "./PrivetRoute";
import Orders from "../components/Orders/Orders";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "orders",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;


