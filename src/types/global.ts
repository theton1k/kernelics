import { InputProps } from '../components/Input';
import { DatePickerProps } from 'react-native-date-picker';

export type TextInputFunction = (newValue: string) => void;
export type VoidFunction = () => void;

export type FormDataItemType = 'datePicker' | 'input' | 'checkbox';

export type FormDataItems = {
  fieldName: string;
  isRequired: boolean;
  type: FormDataItemType;
  defaultValue?: string | boolean | Date;
  inputProps: Partial<InputProps> & Partial<DatePickerProps>;
}[];
