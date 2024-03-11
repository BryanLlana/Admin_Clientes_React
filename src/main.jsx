import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource-variable/onest";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import './index.css'
import Home, { loader as loaderCustomers } from './pages/Home'
import NewCustomer, { action as actionNewCustomer } from './pages/NewCustomer'
import EditCustomer, { action as actionEditCustomer, loader as loaderEditCustomer } from './pages/EditCustomer';
import { action as actionDeleteCustomer } from './components/Customer';

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
      },
      {
        path: '/editar-cliente/:id',
        element: <EditCustomer />,
        loader: loaderEditCustomer,
        action: actionEditCustomer
      },
      {
        path: '/eliminar-cliente/:id',
        action: actionDeleteCustomer
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
