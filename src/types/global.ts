import { InputProps } from '../components/Input';
import { DatePickerProps } from 'react-native-date-picker';
import * as yup from 'yup';

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

export type Schema = yup.ObjectSchema<any>;
