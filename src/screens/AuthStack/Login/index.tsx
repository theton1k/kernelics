import LoginView from './LoginView';
import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';
import * as yup from 'yup';

const Login = () => {
  const passwordInputRef = useRef<TextInput>(null);

  const onSubmitEmail = useCallback(() => {
    if (!passwordInputRef.current) {
      return;
    }

    passwordInputRef.current.focus();
  }, []);

  const onSubmit = useCallback(() => {}, []);

  const formDataItems: FormDataItems = [
    {
      fieldName: 'email',
      isRequired: true,
      type: 'input',
      defaultValue: '',
      inputProps: {
        placeholder: 'Email',
        onSubmitEditing: onSubmitEmail,
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
        autoComplete: 'password',
        autoCorrect: false,
        secureTextEntry: true,
      },
    },
  ];

  const schema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup
      .string()
      .min(8)
      .max(32)
      .required('Password is a required field'),
  });

  return (
    <LoginView
      formDataItems={formDataItems}
      schema={schema}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
