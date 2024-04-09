import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(6, { message: 'Password length must be at least 6 characters' })
    .max(20, { message: 'Password length must be at most 20 characters' })
})
