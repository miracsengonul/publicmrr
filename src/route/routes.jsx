import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import UserDetail from "../pages/User/Detail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/user/:slug",
        element: <UserDetail />,
      },
    ],
  },
]);
