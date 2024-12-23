import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { MIN_PASSWORD_LENGTH } from '~/modules/constants'
import { db } from '~/modules/db'

export const loginSchema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .min(1, 'Informe o e-mail'),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, 'A senha deve conter no mínimo 5 caracteres'),
})

export type LoginInput = z.infer<typeof loginSchema>

export async function login(values: LoginInput) {
  const user = await db.user.findUnique({
    where: {
      email: values.email,
    },
  })

  if (!user) throw 'Usuário não encontrado'

  const isValidPassword = await bcrypt.compare(values.password, user.password)

  if (!isValidPassword) throw 'Senha inválida'

  return user
}
