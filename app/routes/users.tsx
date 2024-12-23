import { useLoaderData } from '@remix-run/react'
import { ErrorFeedback } from '~/components'
import { getUsers, UsersTable } from '~/modules/users'
import { ErrorProps } from '~/types'

export async function loader() {
  return { users: await getUsers() }
}

export default function () {
  const { users } = useLoaderData<typeof loader>()
  return <UsersTable users={users} />
}

export function ErrorBoundary({ error }: ErrorProps) {
  return <ErrorFeedback error={error} />
}
