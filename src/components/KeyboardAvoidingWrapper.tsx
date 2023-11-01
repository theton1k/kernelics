import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

const KeyboardAvoidingWrapper = ({ children }: PropsWithChildren) => {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight + (StatusBar.currentHeight || 0)}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
