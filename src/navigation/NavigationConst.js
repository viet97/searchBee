import HomeScreen from '../components/screen/HomeScreen';
import LoginScreen from '../components/screen/LoginScreen';
import ResetPassword from '../components/screen/ResetPassword';
import SignupScreen from '../components/screen/SignupScreen';
import SplashScreen from '../components/screen/SplashScreen';
import { AppTab } from './router/TabNavigator';

export const ROUTER_NAME = {
  SPLASH: {
    name: 'splash',
    component: SplashScreen,
  },
  LOGIN_SCREEN: {
    name: 'login',
    component: LoginScreen,
  },
  SIGNUP: {
    name: 'signup',
    component: SignupScreen,
  },
  RESET_PASSWORD: {
    name: 'resetPassword',
    component: ResetPassword,
  },
  HOME: {
    name: 'home',
    component: HomeScreen,
  },
  APP_TAB: {
    name: 'tab',
    component: AppTab,
  },
};
export const APP_TAB = {
  HOME: { ...ROUTER_NAME.HOME, name: 'Home_Tab' },
};
