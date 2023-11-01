import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FormDataItems,
  TextInputFunction,
  VoidFunction,
} from '../../../types/global';
import { Form } from '../../../widgets';

export type LoginInputData = Record<'password' | 'email', string>;

type Props = {
  onSubmitEmail: VoidFunction;
  passwordInputRef: React.RefObject<TextInput>;
  inputData: LoginInputData;
  onChangeEmail: TextInputFunction;
  onChangePassword: TextInputFunction;
  saveDataToRedux: VoidFunction;
  formDataItems: FormDataItems;
};

const LoginView = (props: Props) => {
  const { formDataItems, saveDataToRedux } = props;

  return (
    <SafeAreaView style={styles.screenWrapper} edges={['bottom']}>
      <Form
        formDataItems={formDataItems}
        onSubmit={saveDataToRedux}
        formWrapperStyle={styles.formWrapperStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  formWrapperStyle: {
    marginTop: 20,
  },
});

export default LoginView;
