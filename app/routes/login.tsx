import { ActionFunctionArgs, redirect } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { performMutation } from 'remix-forms'
import { login, LoginForm, loginSchema } from '~/modules/auth'
import { commitSession, getSession } from '~/session.server'

const mutation = makeDomainFunction(loginSchema)(async (values) => {
  return login(values)
})

export async function action({ request }: ActionFunctionArgs) {
  const result = await performMutation({
    request,
    schema: loginSchema,
    mutation,
  })

  if (!result.success) return result

  const session = await getSession(request.headers.get('Cookies'))
  session.set('user', result.data)

  return redirect('/', {
    headers: { 'Set-Cookie': await commitSession(session) },
  })
}

export default function () {
  return <LoginForm schema={loginSchema} />
}
