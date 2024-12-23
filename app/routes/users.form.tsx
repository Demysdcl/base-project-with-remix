import { ActionFunctionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { z } from 'zod'
import { ErrorFeedback } from '~/components'
import { formAction } from '~/form-action.server'
import { UserForm } from '~/modules/users'
import { db } from '~/prisma.server'
import { ErrorProps } from '~/types'

const schema = z.object({
  name: z.string().min(1, 'Informe o nome').trim(),
  email: z
    .string()
    .min(1, 'Informe o e-mail')
    .email('Informe um e-mail válido')
    .trim(),
  birthday: z.date({ message: 'Informe a data de nascimento' }),
  password: z
    .string()
    .min(5, 'A senha deve conter no mínimo 5 caracteres')
    .trim(),
})

const mutation = makeDomainFunction(schema)(async (values) => {
  await db.user.create({ data: { ...values, type: 'CUSTOMER' } })
})

export const action = async ({ request }: ActionFunctionArgs) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: '/users',
  })

export default function () {
  return <UserForm schema={schema} />
}

export function ErrorBoundary({ error }: ErrorProps) {
  return <ErrorFeedback error={error} />
}
