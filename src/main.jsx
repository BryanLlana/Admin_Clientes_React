import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource-variable/onest";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import './index.css'
import Home, { loader as loaderCustomers } from './pages/Home'
import NewCustomer, { action as actionNewCustomer } from './pages/NewCustomer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderCustomers
      },
      {
        path: '/nuevo-cliente',
        element: <NewCustomer />,
        action: actionNewCustomer
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
