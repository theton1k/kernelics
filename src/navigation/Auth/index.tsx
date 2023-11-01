import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Registration, Welcome } from '../../screens/AuthStack';
import { RootStackParamList } from '../types';
import { navigatorDefaultProps } from '../../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={navigatorDefaultProps}>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Registration} />
    </Stack.Navigator>
  );
};

export default Auth;
