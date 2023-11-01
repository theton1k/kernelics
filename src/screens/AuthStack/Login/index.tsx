import LoginView, { LoginInputData } from './LoginView';
import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

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

  return (
    <LoginView
      onSubmitEmail={onSubmitEmail}
      passwordInputRef={passwordInputRef}
      inputData={inputData}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      saveDataToRedux={saveDataToRedux}
    />
  );
};

export default Login;
