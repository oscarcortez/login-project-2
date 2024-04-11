import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name length must be at least 3 characters' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(6, { message: 'Password length must be at least 6 characters' })
      .max(20, { message: 'Password length must be at most 20 characters' }),
    passwordConfirmation: z
      .string()
      .min(6, { message: 'Password length must be at least 6 characters' })
      .max(20, { message: 'Password length must be at most 20 characters' })
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation']
  })
