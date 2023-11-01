import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, DatePicker, Input } from '../components';
import { FormDataItems } from '../types/global';
import { KeyboardAvoidingWrapper } from '../hocs';
import CheckBox from '../components/Checkbox';
import { colors } from '../theme';

type Props = {
  formDataItems: FormDataItems;
  onSubmit: (data: any) => void;
  formWrapperStyle: ViewStyle;
};

export default function Form(props: Props) {
  const { onSubmit, formDataItems, formWrapperStyle = {} } = props;

  const defaultValues = formDataItems.reduce(
    (acc: Record<string, string | boolean | Date>, formDataItem) => {
      acc[formDataItem.fieldName] = formDataItem.defaultValue || '';

      return acc;
    },
    {},
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <KeyboardAvoidingWrapper
      style={[styles.keyboardAvoidingWrapper, formWrapperStyle]}>
      <ScrollView style={styles.inputContainer}>
        {formDataItems.map(formDataItem => {
          const { isRequired, inputProps, fieldName, type } = formDataItem;

          return (
            <View key={fieldName}>
              <Controller
                control={control}
                rules={{
                  required: isRequired,
                }}
                render={({ field: { onChange, onBlur, value } }) => {
                  if (type === 'datePicker') {
                    return (
                      <DatePicker
                        wrapperStyle={styles.formItem}
                        date={value as Date}
                        placeholder={inputProps.placeholder}
                        onConfirm={onChange}
                      />
                    );
                  }

                  if (type === 'checkbox') {
                    const customChange = () => {
                      onChange(!value);
                    };

                    return (
                      <CheckBox
                        value={value as boolean}
                        onChange={customChange}
                        placeholder={inputProps.placeholder}
                        checkboxWrapperStyle={styles.formItem}
                        error={!!errors[fieldName]}
                      />
                    );
                  }

                  return (
                    <Input
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value as string}
                      inputWrapperStyle={styles.formItem}
                      {...inputProps}
                      error={!!errors[fieldName]}
                    />
                  );
                }}
                name={fieldName}
              />

              {errors[fieldName] && (
                <Text style={styles.errorText}>This is required.</Text>
              )}
            </View>
          );
        })}
      </ScrollView>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingWrapper: {
    flex: 1,
  },
  formWrapper: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexGrow: 1,
  },
  formItem: {
    marginBottom: 12,
  },
  errorText: {
    color: colors.error,
    marginBottom: 12,
  },
});
