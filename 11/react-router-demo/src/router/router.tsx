import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import Blog from "../pages/Blog.tsx";
import BlogDetail from "../pages/BlogDetail.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import BlogLayout from "../layouts/BlogLayout.tsx";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <BlogLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
]);

export default router;
