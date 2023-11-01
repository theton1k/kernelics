import LoginView from './LoginView';
import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';

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
      inputProps: {
        placeholder: 'Password',
        inputRef: passwordInputRef,
        autoComplete: 'password',
        autoCorrect: false,
        secureTextEntry: true,
      },
    },
  ];

  return <LoginView formDataItems={formDataItems} onSubmit={onSubmit} />;
};

export default Login;
