import { useNavigate, Form } from "react-router-dom"
import FormComp from "../components/FormComp"
import { useActionData } from "react-router-dom"
import Error from "../components/Error"

export const action = async ({ request }) => {
  const formData = await request.formData()
  const customer = Object.fromEntries(formData)

  const errors = []
  if (Object.values(customer).includes('')) {
    errors.push('Todos los campos son obligatorios')
    return errors
  } 

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(customer.email)) {
    errors.push('Email no válido')
    return errors
  }

  return null
}

const NewCustomer = () => {
  const navigate = useNavigate()
  const response = useActionData()
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-2">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold"
          onClick={() => navigate(-1)}
        >Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <Form method="post">
          { response?.length && response.map(r => ( <Error>{r}</Error> ))}
          <FormComp />
          <input type="submit" className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg" value='Guardar Cliente'/>
        </Form>
      </div>
    </>
  )
}

export default NewCustomer