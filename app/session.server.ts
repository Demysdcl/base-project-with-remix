import { createCookieSessionStorage, redirect } from '@remix-run/node'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: ['vT!xWRwhcFwKooP7RV37tUTf_YzjLBc8ryEb'],
      secure: true,
    },
  })

async function getLoggedUser(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('user')) {
    throw redirect('/login')
  }

  return session.get('user')
}

export { commitSession, destroySession, getLoggedUser, getSession }
