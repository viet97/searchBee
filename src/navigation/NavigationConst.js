import React from 'react';
import HomeScreen from '../components/screen/HomeScreen';
import { AppTab } from './router/TabNavigator';

export const ROUTER_NAME = {
  SPLASH: {
    name: 'SplashScreen',
    component: HomeScreen,
  },
  HOME: {
    name: 'Home',
    component: HomeScreen,
  },
  APP_TAB: {
    name: 'AppTab',
    component: AppTab,
  },
};
export const APP_TAB = {
  HOME: { ...ROUTER_NAME.HOME, name: 'Home_Tab' },
};
