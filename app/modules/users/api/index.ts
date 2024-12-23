import { z } from 'zod'
import { MIN_PASSWORD_LENGTH } from '~/modules/constants'
import { db } from '~/modules/db'

export const userSchema = z.object({
  name: z.string().min(1, 'Informe o nome').trim(),
  email: z
    .string()
    .min(1, 'Informe o e-mail')
    .email('Informe um e-mail válido')
    .trim(),
  birthday: z.date({ message: 'Informe a data de nascimento' }),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, 'A senha deve conter no mínimo 5 caracteres')
    .trim(),
})

export type UserInput = z.infer<typeof userSchema>

export const getUsers = async () => db.user.findMany()

export const saveUser = async (user: UserInput) =>
  db.user.create({ data: { ...user, type: 'CUSTOMER' } })
