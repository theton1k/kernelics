import { InputProps } from '../components/Input';

export type TextInputFunction = (newValue: string) => void;
export type VoidFunction = () => void;

export type FormDataItems = {
  fieldName: string;
  isRequired: boolean;
  defaultValue?: string;
  inputProps: InputProps;
}[];
