import { Form } from "react-router-dom"
import { redirect } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import FormComp from "../components/FormComp"
import { useNavigate } from "react-router-dom"
import Error from "../components/Error"
import { useActionData } from "react-router-dom"

export const loader = async ({ params }) => {
  const url = `http://localhost:3000/clientes/${params.id}`
  const data = await fetch(url)
  if (data.status === 404) return redirect('/')
  const response = await data.json()
  return response
}

export const action = async ({ request, params }) => {
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

  const url = `http://localhost:3000/clientes/${params.id}`
  const data = await fetch(url, {
    method: 'put',
    body: JSON.stringify(customer),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  await data.json()

  return redirect('/')
}

const EditCustomer = () => {
  const customer = useLoaderData()
  const response = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-2">A continuación podrás modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold"
          onClick={() => navigate(-1)}
        >Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <Form method="post">
          {response?.length && response.map(r => (<Error>{r}</Error>))}
          <FormComp customer={customer} />
          <input type="submit" className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg" value='Guardar Cambios' />
        </Form>
      </div>
    </>
  )
}

export default EditCustomer