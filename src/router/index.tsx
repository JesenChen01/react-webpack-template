import { createBrowserRouter, RouteObject } from 'react-router-dom'
import React from 'react'
import Index from '@/pages/index'

export type customRouteObject = RouteObject & { name: string }

export const routesList: customRouteObject[] = [
  {
    path: '/',
    name: '首页',
    element: <Index />,
  },
]

const router = createBrowserRouter(routesList)

export default router
