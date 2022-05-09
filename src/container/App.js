import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import ConfigStore from './ConfigStore';

import Loading from '../components/element/Loading';
import { RootSiblingParent, setSiblingWrapper } from 'react-native-root-siblings';
import OrientationModule from '../modules/OrientationModule';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/Colors';
import AppNavigator from '../navigation/AppNavigation';
import { IS_ANDROID } from '../utils/DeviceUtil';
import codePush from 'react-native-code-push'
import { enableLatestRenderer } from 'react-native-maps';

const { useCodepush, ANDROID_DEPLOYMENT_KEY, IOS_DEPLOYMENT_KEY } = require("../config/env.js")

enableLatestRenderer();

const { store } = ConfigStore();
LogBox.ignoreAllLogs();
class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    setSiblingWrapper((sibling) => (
      <Provider store={store}>{sibling}</Provider>
    ));
  }

  componentDidMount() {
    StatusBar.setHidden(false);
    OrientationModule.lockToPortrait();
  }

  componentWillUnmount() {
    // if (Config.buildRelease) {
    //   const AppInfoManager = require('../AppInfoManager').default;
    //   EmitterManager.clear();
    //   DialogGlobal.clear();
    //   ManagerAPI.clear();
    //   AppInfoManager.clear();
    //   NavigationService.clear();
    //   LoadingManager.clear();
    //   ReloadDataManager.clear();
    // }
  }

  render() {
    const containerStyle = {
      backgroundColor: Colors.white,
      flex: 1,
      overflow: 'hidden',
    };
    return (
      <RootSiblingParent>
        <View
          style={{ flex: 1, backgroundColor: Colors.black }}>
          <SafeAreaView
            edges={['right', 'bottom', 'left']}
            style={containerStyle}>
            <SafeAreaProvider>
              <Provider store={store}>
                <StatusBar
                  barStyle={'light-content'}
                  translucent={true}
                  backgroundColor={Colors.STATUS_BAR_COLOR}
                />
                <AppNavigator />
                <Loading />
              </Provider>
            </SafeAreaProvider>
          </SafeAreaView>
        </View>
      </RootSiblingParent>
    );
  }
}

let MyAppContainer = AppContainer;
if (useCodepush) {
  let codePushOptions = {
    checkFrequency: codePush.CheckFrequency.MANUAL,
    deploymentKey: IS_ANDROID ? ANDROID_DEPLOYMENT_KEY : IOS_DEPLOYMENT_KEY,
  };
  MyAppContainer = codePush(codePushOptions)(AppContainer);
}

export default MyAppContainer;
