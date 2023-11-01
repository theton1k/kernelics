import LoginView, { LoginInputData } from './LoginView';
import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';

const Login = () => {
  const passwordInputRef = useRef<TextInput>(null);

  const [inputData, setInputData] = useState<LoginInputData>({
    email: '',
    password: '',
  });

  const onChangePassword = useCallback((newValue: string) => {
    setInputData(prev => ({ ...prev, password: newValue }));
  }, []);

  const onChangeEmail = useCallback((newValue: string) => {
    setInputData(prev => ({ ...prev, email: newValue }));
  }, []);

  const onSubmitEmail = useCallback(() => {
    if (!passwordInputRef.current) {
      return;
    }

    passwordInputRef.current.focus();
  }, []);

  const saveDataToRedux = useCallback(() => {}, []);

  const formDataItems: FormDataItems = [
    {
      fieldName: 'email',
      placeholder: 'Email',
      isRequired: true,
      onSubmitEditing: onSubmitEmail,
    },
    {
      fieldName: 'password',
      placeholder: 'Password',
      isRequired: true,
      isSecured: true,
    },
  ];

  return (
    <LoginView
      onSubmitEmail={onSubmitEmail}
      passwordInputRef={passwordInputRef}
      inputData={inputData}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      saveDataToRedux={saveDataToRedux}
      formDataItems={formDataItems}
    />
  );
};

export default Login;
