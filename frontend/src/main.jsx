import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about.jsx";
import RootLayout, { RootIndex } from "./pages/index.jsx";
import "./index.css";
import UserPage from "./pages/users.jsx";
import CreateUserPage from "./pages/create-user.jsx";
import Login from "./pages/login.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Comment from "./pages/comment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/create-user",
        element: <CreateUserPage />,
      },     
       {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/comment",
        element: <Comment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
