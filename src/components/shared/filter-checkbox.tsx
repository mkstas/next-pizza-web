import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
  text: string;
  value: string;
  name?: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  name,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="size-6 rounded-[8px]"
        id={`checkbox-${String(value)}-${String(name)}`}
      />
      <label htmlFor={`checkbox-${String(value)}-${String(name)}`} className="flex-1 cursor-pointer leading-none">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
