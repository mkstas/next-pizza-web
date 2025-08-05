import z from 'zod';

export const checkoutFormSchema = () =>
  z.object({
    firstName: z.string().min(2, 'Имя должно содержать не менее 2-х символов'),
    lastName: z.string().min(2, 'Фамилия должна содержать не менее 2-х символов'),
    email: z.string().email('Неверный формат почты'),
    phone: z.string().min(10, 'Неверный формат телефона'),
    address: z.string().min(5, 'Неверный формат адреса'),
    comment: z.string().optional(),
  });

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  comment: string | undefined;
}
