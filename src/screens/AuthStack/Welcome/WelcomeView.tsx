import { Button, View } from 'react-native';

type Props = {
  navigateToLogin: () => void;
  navigateToRegistration: () => void;
};

const WelcomeView = ({ navigateToLogin, navigateToRegistration }: Props) => {
  return (
    <View>
      <Button title={'Login'} onPress={navigateToLogin} />
      <Button title={'Register'} onPress={navigateToRegistration} />
    </View>
  );
};

export default WelcomeView;
