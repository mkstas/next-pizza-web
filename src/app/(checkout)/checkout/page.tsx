import { CheckoutCart } from '@/components/shared/checkout-cart';
import { CheckoutSidebar } from '@/components/shared/checkout-sidebar';
import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { WhiteBlock } from '@/components/shared/white-block';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CheckoutPage() {
  return (
    <Container className="py-8">
      <Title text="Оформление заказа" size="lg" className="mb-8 font-extrabold" />

      <div className="flex gap-8">
        <div className="flex-1 space-y-8">
          <CheckoutCart />
          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input name="lastName" className="text-base" placeholder="Фамилия" />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="space-y-5">
              <Input name="address" className="text-base" placeholder="Адрес доставки" />
              <Textarea rows={5} className="text-base" placeholder="Комментарий к заказу" />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-md">
          <CheckoutSidebar />
        </div>
      </div>
    </Container>
  );
}
