import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource-variable/onest";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import './index.css'
import Home, { loader as loaderClientes } from './pages/Home'
import NewCustomer from './pages/NewCustomer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderClientes
      },
      {
        path: '/nuevo-cliente',
        element: <NewCustomer />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
