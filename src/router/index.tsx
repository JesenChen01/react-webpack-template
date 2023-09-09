import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "@/pages/index/index";
import React from "react";
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
];

const router = createBrowserRouter(routes);

export default router;
