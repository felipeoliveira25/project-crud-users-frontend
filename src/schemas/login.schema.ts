import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(4, 'O nome do usuário é obrigatório'),
  password: z.string().min(4, 'A senha é obrigatória'),
})

export type LoginSchema = z.infer<typeof loginSchema>