import React, { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../theme';
import { eyeImage, eyeOutlineImage } from '../assets/images';

type Props = Omit<TextInputProps, 'style'> & {
  inputWrapperStyle?: StyleProp<View>;
  inputRef?: React.RefObject<TextInput>;
};

const Input = (props: Props) => {
  const {
    inputWrapperStyle = {},
    secureTextEntry,
    inputRef,
    ...inputProps
  } = props;

  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  let ref = useRef<TextInput>(null);

  if (inputRef) {
    ref = inputRef;
  }

  return (
    <Pressable
      style={[styles.inputWrapper, inputWrapperStyle]}
      onPress={() => {
        ref?.current?.focus();
      }}>
      <TextInput
        style={styles.textInput}
        ref={ref}
        {...props}
        secureTextEntry={showPassword}
        {...inputProps}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword}>
          <Image
            source={showPassword ? eyeOutlineImage : eyeImage}
            style={styles.passwordEye}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
  passwordEye: {
    width: 24,
    height: 24,
  },
});

export default React.memo(Input);