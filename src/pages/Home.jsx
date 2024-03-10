import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer";

export const loader = () => {
  const clientes = [
    {
      id: 1,
      name: 'Juan',
      phone: 102013313,
      email: "juan@juan.com",
      company: 'Codigo Con Juan'
    },
    {
      id: 2,
      name: 'Karen',
      phone: 138198313,
      email: "karen@juan.com",
      company: 'Codigo Con Juan'
    },
    {
      id: 3,
      name: 'Josue',
      phone: 31983913,
      email: "josue@juan.com",
      company: 'Codigo Con Juan'
    },
    {
      id: 4,
      name: 'Miguel',
      phone: 319381983,
      email: "miguel@juan.com",
      company: 'Codigo Con Juan'
    },
    {
      id: 5,
      name: 'Pedro',
      phone: 1398198938,
      email: "pedro@juan.com",
      company: 'Codigo Con Juan'
    },
  ];

  return clientes
}

const Home = () => {
  const clientes = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <a className="mt-3">Administra tus clientes</a>

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