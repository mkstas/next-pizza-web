import { FC } from 'react';
import { WhiteBlock } from './white-block';
import { FormInput } from './form-components/form-input';
import { FormTextarea } from './form-components/form-textarea';

export const CheckoutPersonalInfo: FC = () => {
  return (
    <>
      <WhiteBlock title="2. Персональная информация">
        <div className="grid grid-cols-2 gap-5">
          <FormInput label="Имя" name="firstName" className="text-base" placeholder="Имя" />
          <FormInput label="Фамилия" name="lastName" className="text-base" placeholder="Фамилия" />
          <FormInput label="E-mail" name="email" className="text-base" placeholder="E-Mail" />
          <FormInput label="Номер телефона" name="phone" className="text-base" placeholder="Телефон" />
        </div>
      </WhiteBlock>
      <WhiteBlock title="3. Адрес доставки">
        <div className="space-y-5">
          <FormInput name="address" className="text-base" placeholder="Адрес доставки" />
          <FormTextarea rows={5} className="text-base" placeholder="Комментарий к заказу" name="comment" />
        </div>
      </WhiteBlock>
    </>
  );
};
