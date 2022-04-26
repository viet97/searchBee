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
import CustomText from '../components/common/Text';

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
                <CustomText>12312312312</CustomText>
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
// if (Config.useCodePush) {
//   const AppInfoManager = require('../AppInfoManager').default;
//   let codePushOptions = {
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     deploymentKey: AppInfoManager.getInstance().getDeploymentKey(),
//   };
//   MyAppContainer = codePush(codePushOptions)(AppContainer);
// }

export default MyAppContainer;
