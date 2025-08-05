import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { ClearButton } from '../clear-button';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<Props> = ({ name, label, required, className, ...props }) => {
  const { register, formState, watch, setValue } = useFormContext();

  const value = watch(name);
  const errorText = formState.errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="mb-1 text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}

      <div className="relative">
        <Input className="text-md h-12" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};
