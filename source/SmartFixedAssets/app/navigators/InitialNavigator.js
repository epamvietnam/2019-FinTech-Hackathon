import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../components/SplashScreen';
import AppNavigator from './AppNavigator';

export default createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator,
});
