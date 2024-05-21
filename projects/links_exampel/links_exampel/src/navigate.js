import { createBrowserRouter } from "react-router-dom";
import React from "react";


import App from "./App";
import Home from "./pages/home";
import Test from "./pages/test";

const router = createBrowserRouter ([
    {path: "/", element: <App />},
    {path: "/home", element: <Home />},
    {path: "/test", element: <Test />},
]);

export default router;