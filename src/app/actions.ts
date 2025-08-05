'use server';

import { CheckoutFormValues } from '@/schemas/checkout-form-schema';

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);
}
