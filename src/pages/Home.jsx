import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer";

export const loader = async () => {
  const url = 'http://localhost:3000/clientes'
  const data = await fetch(url)
  const response = await data.json()
  return response
}

const Home = () => {
  const clientes = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-2">Administra tus clientes</p>

      { clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { clientes.map(c => (
              <Customer customer={c} key={c.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes</p>
      ) }
    </>
  )
}

export default Home