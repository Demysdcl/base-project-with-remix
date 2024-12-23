import { z } from 'zod'
import { MIN_PASSWORD_LENGTH } from '~/modules/constants'

export const loginSchema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .min(1, 'Informe o e-mail'),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, 'A senha deve conter no mínimo 5 caracteres'),
})
