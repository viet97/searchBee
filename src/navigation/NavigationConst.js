import EditAddressScreen from '../components/screen/EditAddressScreen';
import HomeScreen from '../components/screen/HomeScreen';
import LoginScreen from '../components/screen/LoginScreen';
import ProfileScreen from '../components/screen/ProfileScreen';
import ResetPassword from '../components/screen/ResetPassword';
import ResetPasswordConfirmation from '../components/screen/ResetPasswordConfirmation';
import SignupScreen from '../components/screen/SignupScreen';
import SplashScreen from '../components/screen/SplashScreen';
import UploadPrescription from '../components/screen/UploadPrescription';
import MapScreen from '../components/screen/MapScreen';
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
  RESET_PASSWORD_CONFIRMATION: {
    name: 'resetPasswordConfirmation',
    component: ResetPasswordConfirmation,
  },
  HOME: {
    name: 'home',
    component: HomeScreen,
  },
  PROFILE: {
    name: 'profile',
    component: ProfileScreen,
  },
  UPLOAD_PRESCRIPTION: {
    name: 'uploadPrescription',
    component: UploadPrescription,
  },
  EDIT_ADDRESS: {
    name: 'editAddress',
    component: EditAddressScreen,
  },
  MAP: {
    name: 'map',
    component: MapScreen,
  },
  APP_TAB: {
    name: 'tab',
    component: AppTab,
  },
};
export const APP_TAB = {
  HOME: { ...ROUTER_NAME.HOME, name: 'Home_Tab' },
  OFFER: { ...ROUTER_NAME.UPLOAD_PRESCRIPTION, name: 'Offer_Tab' },
  PROFILE: { ...ROUTER_NAME.PROFILE, name: 'Profile_Tab' },
};
