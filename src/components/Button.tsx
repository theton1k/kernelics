import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, constants } from '../theme';
import React from 'react';
import { VoidFunction } from '../types/global';

type Props = {
  title: string;
  onPress: VoidFunction;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const Button = (props: Props) => {
  const { title, onPress, titleStyle = {}, buttonStyle = {} } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={constants.activeOpacity}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: colors.white,
    fontWeight: '500',
  },
});

export default React.memo(Button);
