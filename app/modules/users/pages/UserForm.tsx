import { useNavigate } from '@remix-run/react'
import { SomeZodObject } from 'zod'
import { Button, Input, InputDate } from '~/components'
import { RemixForm } from '~/form'

type UserFormProps = { schema: SomeZodObject }

export function UserForm({ schema }: UserFormProps) {
  const navigate = useNavigate()

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
        <div className="mt-5 md:col-span-2 md:mt-0">
          <RemixForm schema={schema}>
            {({ Field, Errors, register }) => (
              <>
                <Field name="name" label="Nome" className="mb-4">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <Input {...register('name')} />
                      <Errors className="text-red-600 text-xs" />
                    </>
                  )}
                </Field>

                <Field name="email" label="E-mail" className="mb-4">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <Input {...register('email')} />
                      <Errors className="text-red-600 text-xs" />
                    </>
                  )}
                </Field>

                <Field
                  name="birthday"
                  label="Data de nascimento"
                  className="mb-4"
                >
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <InputDate {...register('birthday')} />
                      <Errors className="text-red-600 text-xs" />
                    </>
                  )}
                </Field>

                <Field name="password" label="Senha" className="mb-4">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <Input type="password" {...register('password')} />
                      <Errors className="text-red-600 text-xs" />
                    </>
                  )}
                </Field>
                <Errors className="text-red-600 text-xs pb-4" />
                <div className="flex gap-4">
                  <Button type="submit">Salvar</Button>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => navigate(-1)}
                  >
                    Voltar
                  </Button>
                </div>
              </>
            )}
          </RemixForm>
        </div>
      </div>
    </div>
  )
}
