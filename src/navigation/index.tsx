import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import Auth from './Auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
