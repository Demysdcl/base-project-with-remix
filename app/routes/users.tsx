import { UsersTable } from '~/modules/users'

import { useLoaderData } from '@remix-run/react'
import { ErrorFeedback } from '~/components'
import { ErrorProps } from '~/types'

export async function loader() {
  throw Error('Alguma coisa errada não está certa')
  // const users = await db.user.findMany()
  // return { users }
}

export default function () {
  const { users } = useLoaderData<typeof loader>()
  return <UsersTable users={users} />
}

export function ErrorBoundary({ error }: ErrorProps) {
  return <ErrorFeedback error={error} />
}
