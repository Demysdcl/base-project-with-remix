import { Link } from '@remix-run/react'

import { SomeZodObject } from 'zod'
import { Button, CustomForm } from '~/components'
import FullOpacityScreen from '~/components/ui/FullOpacityScreen'

type UserFormProps = { schema: SomeZodObject }

export function UserForm({ schema }: UserFormProps) {
  return (
    <FullOpacityScreen>
      <div className="bg-white mt-5 md:col-span-2 md:mt-0 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg w-96">
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
          <Link to="/users" className="w-full">
            <Button type="button" className="w-full" variant="secondary">
              Voltar
            </Button>
          </Link>
        </CustomForm>
      </div>
    </FullOpacityScreen>
  )
}
