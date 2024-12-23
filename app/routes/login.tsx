import { ActionFunctionArgs } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { performMutation } from 'remix-forms'
import { login, LoginForm, loginSchema } from '~/modules/auth'

const mutation = makeDomainFunction(loginSchema)(async (values) => {
  return login(values)
})

export async function action({ request }: ActionFunctionArgs) {
  const results = await performMutation({
    request,
    schema: loginSchema,
    mutation,
  })

  return results
}

export default function () {
  return <LoginForm schema={loginSchema} />
}
