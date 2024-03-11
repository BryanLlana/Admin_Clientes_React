import { redirect } from "react-router-dom"
import { Form } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const action = async ({params}) => {
  const url = `http://localhost:3000/clientes/${params.id}`
  const data = await fetch(url, {
    method: 'delete'
  })
  await data.json()
  return redirect('/')
}

const Customer = ({ customer }) => {
  const navigate = useNavigate()
  const { id, name, phone, company, email } = customer
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-xl text-gray-800 font-semibold">{name}</p>
        <p>{company}</p>
      </td>
      <td className="p-6 space-y-2">
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold">Email: </span>{email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 font-bold">Celular: </span>{phone}
        </p>
      </td>
      <td className="p-6 flex gap-5">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-bold"
          onClick={() => navigate(`/editar-cliente/${id}`)}
        >Editar
        </button>
        <Form
          method="post"
          action={`/eliminar-cliente/${id}`}
          onSubmit={e => {
            if (!confirm('¿Deseas eliminar este registro?')) {
              e.preventDefault()
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 font-bold"
          >Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Customer