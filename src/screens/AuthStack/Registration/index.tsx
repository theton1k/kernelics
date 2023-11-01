import RegistrationView from './RegistrationView';
import { RefObject, useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';

const Registration = () => {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const repeatPasswordInputRef = useRef<TextInput>(null);
  const datePickerRef = useRef<TextInput>(null);

  const onSubmitEditing = useCallback(
    (ref: RefObject<TextInput>) => () => {
      if (ref.current) {
        ref.current.focus();
      }
    },
    [],
  );

  const onSubmit = useCallback(() => {}, []);

  const formDataItems: FormDataItems = [
    {
      fieldName: 'fullName',
      isRequired: true,
      type: 'input',
      defaultValue: '',
      inputProps: {
        placeholder: 'Full name',
        onSubmitEditing: onSubmitEditing(emailInputRef),
        autoComplete: 'name',
        autoCorrect: true,
        enterKeyHint: 'next',
      },
    },
    {
      fieldName: 'email',
      isRequired: true,
      type: 'input',
      defaultValue: '',
      inputProps: {
        placeholder: 'Email',
        inputRef: emailInputRef,
        onSubmitEditing: onSubmitEditing(passwordInputRef),
        autoComplete: 'email',
        keyboardType: 'email-address',
        autoCorrect: false,
        enterKeyHint: 'next',
      },
    },
    {
      fieldName: 'password',
      isRequired: true,
      type: 'input',
      defaultValue: '',
      inputProps: {
        placeholder: 'Password',
        inputRef: passwordInputRef,
        onSubmitEditing: onSubmitEditing(repeatPasswordInputRef),
        autoComplete: 'password',
        selectTextOnFocus: true,
        autoCorrect: false,
        secureTextEntry: true,
        enterKeyHint: 'next',
      },
    },
    {
      fieldName: 'repeatPassword',
      isRequired: true,
      type: 'input',
      defaultValue: '',
      inputProps: {
        placeholder: 'Repeat password',
        inputRef: repeatPasswordInputRef,
        onSubmitEditing: onSubmitEditing(datePickerRef),
        autoComplete: 'new-password',
        selectTextOnFocus: true,
        autoCorrect: false,
        secureTextEntry: true,
        enterKeyHint: 'next',
      },
    },
    {
      fieldName: 'datePicker',
      isRequired: true,
      type: 'datePicker',
      defaultValue: '',
      inputProps: {
        placeholder: 'Date of Birth',
        inputRef: datePickerRef,
        autoCorrect: false,
      },
    },
    {
      fieldName: 'T&C',
      isRequired: true,
      type: 'checkbox',
      defaultValue: false,
      inputProps: {
        placeholder: 'I agree to Terms and Conditions',
      },
    },
    {
      fieldName: 'ads',
      isRequired: false,
      type: 'checkbox',
      defaultValue: false,
      inputProps: {
        placeholder:
          'I agree to receive ads and promotional material on the given email address',
      },
    },
  ];

  return <RegistrationView formDataItems={formDataItems} onSubmit={onSubmit} />;
};

export default Registration;
