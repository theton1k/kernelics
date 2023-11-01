import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormDataItems, Schema, VoidFunction } from '../../../types/global';
import { Form } from '../../../widgets';

type Props = {
  onSubmit: VoidFunction;
  formDataItems: FormDataItems;
  schema: Schema;
};

const LoginView = (props: Props) => {
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

export default LoginView;
