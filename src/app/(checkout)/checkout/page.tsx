'use client';

import { CheckoutCart } from '@/components/shared/checkout-cart';
import { CheckoutSidebar } from '@/components/shared/checkout-sidebar';
import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutPersonalInfo } from '@/components/shared/checkout-personal-info';
import { checkoutFormSchema, CheckoutFormValues } from '@/schemas/checkout-form-schema';

export default function CheckoutPage() {
  const form = useForm<CheckoutFormValues>({
    mode: 'onChange',
    resolver: zodResolver(checkoutFormSchema()),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(1);
  };

  return (
    <Container className="py-8">
      <Title text="Оформление заказа" size="lg" className="mb-8 font-extrabold" />

      <form className="flex gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormProvider {...form}>
          <div className="flex-1 space-y-8">
            <CheckoutCart />
            <CheckoutPersonalInfo />
          </div>
          <div className="w-md">
            <CheckoutSidebar />
          </div>
        </FormProvider>
      </form>
    </Container>
  );
}
