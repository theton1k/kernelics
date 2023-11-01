import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '../components';
import { FormDataItems } from '../types/global';
import { KeyboardAvoidingWrapper } from '../hocs';

type Props = {
  formDataItems: FormDataItems;
  onSubmit: (data: any) => void;
  formWrapperStyle: ViewStyle;
};

export default function Form(props: Props) {
  const { onSubmit, formDataItems, formWrapperStyle = {} } = props;

  const defaultValues = formDataItems.reduce(
    (acc: Record<string, string>, formDataItem) => {
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
          const {
            isRequired,
            onSubmitEditing,
            placeholder,
            fieldName,
            isSecured,
          } = formDataItem;

          return (
            <View key={fieldName}>
              <Controller
                control={control}
                rules={{
                  required: isRequired,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    onSubmitEditing={onSubmitEditing}
                    secureTextEntry={isSecured}
                    inputWrapperStyle={styles.inputWrapperStyle}
                  />
                )}
                name={fieldName}
              />

              {errors[fieldName] && <Text>This is required.</Text>}
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
  inputWrapperStyle: {
    marginBottom: 12,
  },
});
