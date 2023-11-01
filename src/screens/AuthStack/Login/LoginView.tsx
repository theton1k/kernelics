import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, Input, KeyboardAvoidingWrapper } from '../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputFunction, VoidFunction } from '../../../types/global';

export type LoginInputData = Record<'password' | 'email', string>;

type Props = {
  onSubmitEmail: VoidFunction;
  passwordInputRef: React.RefObject<TextInput>;
  inputData: LoginInputData;
  onChangeEmail: TextInputFunction;
  onChangePassword: TextInputFunction;
};

const LoginView = (props: Props) => {
  const {
    onSubmitEmail,
    passwordInputRef,
    inputData,
    onChangeEmail,
    onChangePassword,
  } = props;

  return (
    <SafeAreaView style={styles.screenWrapper} edges={['bottom']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentWrapper}>
          <View style={styles.inputWrapper}>
            <Input
              autoComplete={'email'}
              keyboardType={'email-address'}
              autoCorrect={false}
              onSubmitEditing={onSubmitEmail}
              value={inputData.email}
              onChangeText={onChangeEmail}
              enterKeyHint={'next'}
            />

            <Input
              inputRef={passwordInputRef}
              autoComplete={'password'}
              autoCorrect={false}
              secureTextEntry={true}
              value={inputData.password}
              onChangeText={onChangePassword}
            />
          </View>

          <KeyboardAvoidingWrapper>
            <Button title={'Login'} onPress={() => {}} />
          </KeyboardAvoidingWrapper>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 24,
  },
  inputWrapper: {
    flex: 1,
    gap: 12,
  },
});

export default LoginView;
