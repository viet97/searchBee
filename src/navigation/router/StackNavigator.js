import * as React from 'react';
import { ROUTER_NAME } from '../NavigationConst';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        orientation: 'portrait',
        headerShown: false,
      }}
      initialRouteName={ROUTER_NAME.SPLASH.name}>
      {Object.values(ROUTER_NAME).map(screen => {
        return <Stack.Screen
          key={screen.name}
          {...screen} />;
      })}
    </Stack.Navigator>
  );
};

export { AppStack };
