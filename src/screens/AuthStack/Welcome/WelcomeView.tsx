import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button } from '../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { welcomeBGImage } from '../../../assets/images';
import { VoidFunction } from '../../../types/global';

type Props = {
  navigateToLogin: VoidFunction;
  navigateToRegistration: VoidFunction;
};

const WelcomeView = ({ navigateToLogin, navigateToRegistration }: Props) => {
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <ImageBackground
        source={welcomeBGImage}
        style={styles.backgroundImage}
        resizeMode={'cover'}
      />
      <View style={styles.buttonWrapper}>
        <Button title={'Login'} onPress={navigateToLogin} />
        <Button title={'Register'} onPress={navigateToRegistration} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '120%',
  },
  buttonWrapper: {
    width: '50%',
    gap: 12,
  },
});

export default WelcomeView;
