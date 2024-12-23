import { ActionFunctionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { ErrorFeedback } from '~/components'
import { formAction } from '~/form-action.server'
import { saveUser, UserForm, userSchema } from '~/modules/users'
import { ErrorProps } from '~/types'

const mutation = makeDomainFunction(userSchema)(async (values) => {
  await saveUser(values)
})

export const action = async ({ request }: ActionFunctionArgs) =>
  formAction({
    request,
    schema: userSchema,
    mutation,
    successPath: '/users',
  })

export default function () {
  return <UserForm schema={userSchema} />
}

export function ErrorBoundary({ error }: ErrorProps) {
  return <ErrorFeedback error={error} />
}
