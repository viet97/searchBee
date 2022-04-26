import React from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import SVGIcon from '../../../../assets/SVGIcon';
import NavigationService from '../../../navigation/NavigationService';
import { ROUTER_NAME } from '../../../navigation/NavigationConst';

export default class SplashScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  _componentDidMount() {
    setTimeout(() => {
      NavigationService.getInstance().reset({
        routerName: ROUTER_NAME.LOGIN_SCREEN.name,
      });
    }, 500)
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <SVGIcon.splash_logo
          width={232}
          height={280}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
