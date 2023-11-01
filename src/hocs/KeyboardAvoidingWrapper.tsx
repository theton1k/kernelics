import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ViewStyle,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

type Props = PropsWithChildren & { style: ViewStyle | ViewStyle[] };

const KeyboardAvoidingWrapper = (props: Props) => {
  const { children, style = {} } = props;

  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={style}
      keyboardVerticalOffset={headerHeight + (StatusBar.currentHeight || 0)}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
