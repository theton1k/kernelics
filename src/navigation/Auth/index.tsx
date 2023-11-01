import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Registration, Welcome } from '../../screens/AuthStack';
import { RootStackParamList } from '../types';
import { navigatorDefaultOptions } from '../../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={navigatorDefaultOptions}>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name={'Register'}
        component={Registration}
        options={{ title: 'Registration' }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
