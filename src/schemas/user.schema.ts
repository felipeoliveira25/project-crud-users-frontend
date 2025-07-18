import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(4, 'O nome deve ter pelo menos 4 caracteres'),
  email: z.string().email('O e-mail deve ser válido'),
  telephone: z
    .string()
    .regex(/^\d{10,11}$/, 'O telefone deve ter 10 ou 11 dígitos numéricos'),
  role: z.string().min(1, 'O cargo é obrigatório'),
  age: z.coerce.number().int().min(18, 'A idade deve ser no mínimo 18 anos'),
  salary: z.coerce
    .number({
      invalid_type_error: 'O salário deve ser um valor numérico',
    })
    .positive('O salário deve ser maior que zero')
    .refine(
      (val) => {
        const decimalPlaces = (val.toString().split('.')[1] || '').length;
        return decimalPlaces <= 2;
      },
      'O salário deve ter até duas casas decimais (ex.: 1234.56)',
    ),
});

export type UserSchema = z.infer<typeof userSchema>;