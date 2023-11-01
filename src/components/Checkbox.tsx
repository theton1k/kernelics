import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { VoidFunction } from '../types/global';
import { checkImage } from '../assets/images';
import { colors } from '../theme';

type Props = {
  value: boolean;
  onChange: VoidFunction;
  placeholder?: string;
  checkboxWrapperStyle?: ViewStyle;
  error?: boolean;
};

const CheckBox = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    checkboxWrapperStyle = {},
    error,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, checkboxWrapperStyle]}
      onPress={onChange}>
      <View style={[styles.checkBoxWrapper, error && styles.error]}>
        {value && <Image source={checkImage} style={styles.checkbox} />}
      </View>
      <Text>{placeholder}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkBoxWrapper: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: '80%',
    height: '80%',
  },
  error: {
    borderColor: colors.error,
  },
});

export default CheckBox;
