import { useNavigate } from '@remix-run/react'
import { SomeZodObject } from 'zod'
import { Button, CustomForm } from '~/components'

type UserFormProps = { schema: SomeZodObject }

export function UserForm({ schema }: UserFormProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    console.log('Voltar clicado')
    navigate(-1)
  }

  return (
    <div className="relative pt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0 ">
          <CustomForm
            schema={schema}
            buttonText="Salvar"
            fields={[
              { label: 'Nome', name: 'name' },
              { label: 'E-mail', name: 'email', type: 'email' },
              { label: 'Data de nascimento', name: 'birthday', type: 'date' },
              { label: 'Senha', name: 'password', type: 'password' },
            ]}
          >
            <Button
              type="button"
              onClick={handleBack}
              variant="outline"
              className="w-full"
            >
              Voltar
            </Button>
          </CustomForm>
        </div>
      </div>
    </div>
  )
}
