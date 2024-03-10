const Customer = ({ customer }) => {
  const { name, phone, company, email } = customer
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
        >Editar
        </button>
        <button
          type="button"
          className="text-red-600 hover:text-red-700 font-bold"
        >Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Customer