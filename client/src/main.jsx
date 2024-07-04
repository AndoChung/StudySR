import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import axios from "axios";

import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";


axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.withCredentials = true;


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [],
  },
  {
    path: "/signup",
    element: <SignupPage />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);