import { InputProps } from '../components/Input';

export type TextInputFunction = (newValue: string) => void;
export type VoidFunction = () => void;

export type FormDataItemType = 'datePicker' | 'input' | 'checkbox';

export type FormDataItems = {
  fieldName: string;
  isRequired: boolean;
  type: FormDataItemType;
  defaultValue?: string;
  inputProps: InputProps;
}[];
