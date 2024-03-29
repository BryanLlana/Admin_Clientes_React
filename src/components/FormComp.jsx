const FormComp = ({ customer }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="name"
        >Nombre:</label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Cliente"
          name="name"
          defaultValue={customer?.name}
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="company"
        >Empresa:</label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Empresa del Cliente"
          name="company"
          defaultValue={customer?.company}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="email"
        >E-mail:</label>
        <input
          id="email"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email del Cliente"
          name="email"
          defaultValue={customer?.email}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="phone"
        >Teléfono:</label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Teléfono del Cliente"
          name="phone"
          defaultValue={customer?.phone}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="notes"
        >Notas:</label>
        <textarea
          id="notes"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notas del Cliente"
          name="notes"
          defaultValue={customer?.notes}
        />
      </div>
    </>
  )
}

export default FormComp