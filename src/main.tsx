import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./layouts/Dashboard";
import Home from "./Pages/Home/Home.page";
import { CssBaseline } from "@mui/material";

import "./index.css";
import About from "./Pages/About/About.page";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Dashboard,
        children: [
          {
            path: "",
            Component: () => <Home />,
          },
          {
            path: "about",
            Component: () => <About />,
          },
          {
            path: "services",
            Component: () => <div>Our Services</div>,
          },
          {
            path: "doctors",
            Component: () => <div>Meet Our Doctors</div>,
          },
          {
            path: "contact",
            Component: () => <div>Contact Us</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
