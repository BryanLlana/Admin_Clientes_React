import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

        <nav className='mt-10'>
          <Link
            className={`text-xl mt-2 hover:text-blue-400 ${location.pathname === '/' ? 'text-blue-400' : 'text-white'}`}
            to="/"
          >Clientes
          </Link>
          <Link 
            className={`text-xl mt-2 hover:text-blue-400 ${location.pathname === '/nuevo-cliente' ? 'text-blue-400' : 'text-white'}`}
            to='/nuevo-cliente'
          >Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout