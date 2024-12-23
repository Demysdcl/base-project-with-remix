import { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ErrorFeedback } from '~/components'
import { getUsers, UsersTable } from '~/modules/users'
import { getLoggedUser } from '~/session.server'
import { ErrorProps } from '~/types'

export async function loader({ request }: LoaderFunctionArgs) {
  await getLoggedUser(request)

  return { users: await getUsers() }
}

export default function () {
  const { users } = useLoaderData<typeof loader>()
  return <UsersTable users={users} />
}

export function ErrorBoundary({ error }: ErrorProps) {
  return <ErrorFeedback error={error} />
}
