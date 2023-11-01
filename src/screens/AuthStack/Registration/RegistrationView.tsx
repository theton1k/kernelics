import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form } from '../../../widgets';
import { FormDataItems, Schema } from '../../../types/global';
import { RegistrationForm } from '../../../store/reducers/formData';

type Props = {
  onSubmit: (formData: RegistrationForm) => void;
  formDataItems: FormDataItems;
  schema: Schema;
};

const RegistrationView = (props: Props) => {
  const { formDataItems, onSubmit, schema } = props;

  return (
    <SafeAreaView style={styles.screenWrapper} edges={['bottom']}>
      <Form
        formDataItems={formDataItems}
        onSubmit={onSubmit}
        formWrapperStyle={styles.formWrapperStyle}
        schema={schema}
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

export default RegistrationView;
