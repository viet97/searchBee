import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TABBAR_HEIGHT, iconTabSize } from '../../utils/DeviceUtil';
import BaseElement from '../../components/element/BaseElement';
import { APP_TAB } from '../NavigationConst';
import SVGIcon from '../../../assets/SVGIcon';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import Colors from '../../../assets/Colors';
import SBButton from '../../components/common/SBButton';

export const tabIconMarginTop = StaticSafeAreaInsets.safeAreaInsetsBottom === 0 ? 12 : 16;
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginTop: tabIconMarginTop,
    width: iconTabSize,
    height: iconTabSize,
  },
});

const CustomTabBar = ({ state, descriptors, navigation }) => {
  let customTabBar = {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: TABBAR_HEIGHT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: Colors.black,
    shadowRadius: 20,
    shadowOpacity: 0.1,
  };

  return (
    <View style={customTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const { IconFC, Icon } = options;
        const content = (
          <SBButton
            accessible
            key={index}
            rippleColor={Colors.white}
            onPressIn={onPress}
            onLongPress={onLongPress}
            style={styles.contentStyle}
          >
            {isFocused ? (
              <IconFC
                width={iconTabSize}
                height={iconTabSize}
                style={{ marginTop: tabIconMarginTop }}
              />
            ) : (
              <Icon
                width={iconTabSize}
                height={iconTabSize}
                style={{ marginTop: tabIconMarginTop }}
              />
            )}
          </SBButton>
        );

        return content;
      })}
    </View>
  );
};

export class MainTab extends BaseElement {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <Tab.Navigator
        tabBar={(props) => (
          <CustomTabBar  {...props} />
        )}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_TAB.HOME.name}
      >
        <Tab.Screen
          {...APP_TAB.HOME}
          options={{
            tabBarLabel: APP_TAB.HOME.title,
            Icon: SVGIcon.home,
            IconFC: SVGIcon.home_fc,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export const AppTab = MainTab
