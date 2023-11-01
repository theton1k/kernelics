import { ScreenProps } from '../../../navigation/types';
import WelcomeView from './WelcomeView';

type Props = ScreenProps<'Welcome'>;

const Welcome = ({ navigation }: Props) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToRegistration = () => {
    navigation.navigate('Register');
  };

  return (
    <WelcomeView
      navigateToLogin={navigateToLogin}
      navigateToRegistration={navigateToRegistration}
    />
  );
};

export default Welcome;
