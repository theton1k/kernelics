import LoginView from './LoginView';
import { useCallback, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { FormDataItems } from '../../../types/global';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { formActions, LoginForm } from '../../../store/reducers/formData';

const Login = () => {
  const passwordInputRef = useRef<TextInput>(null);

  const dispatch = useAppDispatch();

  const storedData = useAppSelector(state => state.form.login);

  const onSubmitEmail = useCallback(() => {
    if (!passwordInputRef.current) {
      return;
    }

    passwordInputRef.current.focus();
  }, []);

  const onSubmit = useCallback(
    (data: LoginForm) => {
      dispatch(formActions.setLoginForm(data));

      Alert.alert('Success');
    },
    [dispatch],
  );

  const formDataItems: FormDataItems = [
    {
      fieldName: 'email',
      isRequired: true,
      type: 'input',
      defaultValue: storedData.email,
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
      defaultValue: storedData.password,
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
