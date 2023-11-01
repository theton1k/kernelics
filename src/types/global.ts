export type TextInputFunction = (newValue: string) => void;
export type VoidFunction = () => void;

export type FormDataItems = {
  fieldName: string;
  placeholder: string;
  isRequired: boolean;
  defaultValue?: string;
  onSubmitEditing?: VoidFunction;
  isSecured?: boolean;
}[];
