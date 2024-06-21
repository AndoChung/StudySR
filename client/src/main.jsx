import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
    children: [
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);