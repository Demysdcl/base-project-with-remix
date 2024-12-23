import { LoginForm } from '~/modules/login'
import { loginSchema } from '~/modules/login/service'

export default function () {
  return <LoginForm schema={loginSchema} />
}
