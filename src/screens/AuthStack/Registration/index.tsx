import RegistrationView from './RegistrationView';
import { RefObject, useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';
import subYears from 'date-fns/subYears';
import * as yup from 'yup';

const now = new Date();
const minDate = subYears(new Date(), 100);
const maxDate = subYears(new Date(), 18);
const defaultDate = subYears(now, 25);

const Registration = () => {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const repeatPasswordInputRef = useRef<TextInput>(null);

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
      fieldName: 'name',
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
        selectTextOnFocus: true,
        autoCorrect: false,
        secureTextEntry: true,
        enterKeyHint: 'next',
        textContentType: 'oneTimeCode',
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
        selectTextOnFocus: true,
        autoCorrect: false,
        secureTextEntry: true,
        textContentType: 'oneTimeCode',
      },
    },
    {
      fieldName: 'birthDay',
      isRequired: true,
      type: 'datePicker',
      defaultValue: defaultDate,
      inputProps: {
        placeholder: 'Date of Birth',
        maximumDate: minDate,
        minimumDate: maxDate,
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

  const schema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    email: yup.string().email().required('Email is a required field'),
    password: yup
      .string()
      .min(8)
      .max(32)
      .required('Password is a required field'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), 'none'], 'Passwords must match'),
    birthDay: yup
      .date()
      .max(maxDate, 'Age should be at least 18 years')
      .min(minDate, 'Age should be less than 100 yeas'),
    'T&C': yup
      .boolean()
      .isTrue('You should confirm T&C')
      .required('You should confirm T&C'),
  });

  return (
    <RegistrationView
      formDataItems={formDataItems}
      onSubmit={onSubmit}
      schema={schema}
    />
  );
};

export default Registration;
