import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/routes.jsx";
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>,
);
