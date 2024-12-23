import { SomeZodObject } from 'zod'
import { CustomForm } from '~/components'
import { CustomFormField } from '~/components/ui/CustomForm'

type LoginProps = {
  schema: SomeZodObject
}

const fields: CustomFormField[] = [
  {
    label: 'E-mail',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
  },
]

export function LoginForm({ schema }: LoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <CustomForm schema={schema} fields={fields} buttonText="Entrar" />
      </div>
    </div>
  )
}
