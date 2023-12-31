import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import { dateToHumanFormat } from '../utils';
import { colors } from '../theme';

type Props = {
  date: Date;
  onConfirm: (date: Date) => void;
  placeholder?: string;
  wrapperStyle?: ViewStyle;
  error?: boolean;
};

const DatePicker = (props: Props) => {
  const {
    error,
    placeholder,
    date = new Date(),
    onConfirm,
    wrapperStyle,
  } = props;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const _onConfirm = (selectedDate: Date) => {
    toggleOpen();
    onConfirm(selectedDate);
  };

  return (
    <TouchableOpacity
      onPress={toggleOpen}
      style={[styles.wrapper, wrapperStyle, error && styles.error]}>
      <>
        <Text>{placeholder}</Text>

        <RNDatePicker
          date={date}
          onConfirm={_onConfirm}
          open={open}
          mode={'date'}
          modal
          onCancel={toggleOpen}
        />
        <Text>{dateToHumanFormat(date)}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  error: {
    borderColor: colors.error,
  },
});

export default DatePicker;
