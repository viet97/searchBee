import * as React from 'react';

import { shouldComponentUpdate } from '../../utils/RenderUtil';
import { StyleSheet, View, BackHandler, ScrollView, RefreshControl } from 'react-native';

import Text from '../common/Text';
import BaseComponent from '../BaseComponent';
import NavigationService from '../../navigation/NavigationService';
import { NetworkModule } from '../../modules/NetworkStateModule';
import { ERROR_CODE } from '../../connection/Connector';
import Colors from '../../../assets/Colors';
import SVGIcon from '../../../assets/SVGIcon';

export default class BaseScreen extends BaseComponent {
  constructor(props) {
    super(props);
    this.displayName = 'BaseScreen';
    this.useExitApp = true;
  }

  componentDidMount() {
    if (!NetworkModule.isConnected) {
      this.setNetworkError(true);
    }
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    this._componentDidMount && this._componentDidMount();
  }

  onBackPress = () => { };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.mounted = false;
    this._componentWillUnmount && this._componentWillUnmount();
  }

  callbackSafe = (cb, ...arg) => {
    if (!this.mounted) {
      return;
    }
    cb && cb.call(this, ...arg);
  };

  setStateSafe = (state, callback) => {
    this.callbackSafe(() => this.setState(state, callback));
  };

  _debugLog = (...arg) => {
    if (this.debug) {
      console.log(...arg);
    }
  };

  renderContent() {
    return <Text>{this.displayName}</Text>;
  }

  back = () => {
    NavigationService.getInstance().goBack();
  };

  setNotFoundError = (isError) => {
    this.setStateSafe({ isNotFoundError: isError });
  }

  renderNotFoundError = () => {
    return null;
  }

  setNetworkError = (isError, onFinish) => {
    this.setStateSafe({ isNetworkError: isError }, onFinish);
  }

  setNetworkByError = (error) => {
    const errCode = error?.code
    if (errCode === ERROR_CODE.TIMEOUT) {
      this.setNetworkError(true);
    } else {
      this.setNetworkError(false);
    }
  }

  _onRefresh = () => {
    this.setNetworkError(false);
    this.onRefresh && this.onRefresh();
  }

  renderNetworkError = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={this._onRefresh} />
        }
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{
          flex: 1,
          backgroundColor: Colors.backgroundScreenColor,
        }}
      >
        <Text bold size={25}>
          Oops...
        </Text>
        <Text
          style={{
            color: Colors.bottom_title,
            marginTop: 16,
            paddingHorizontal: 40,
            textAlign: 'center',
          }}
          size={13}
        >
          It looks like you are offline. Check your connection settings and
          refresh this page. If you are still experiencing issues, please
          contact us at
        </Text>

      </ScrollView>
    );
  };

  renderUnderLogo = () => {
    return (
      <View
        style={styles.underLogo}>
        <SVGIcon.splash_logo
          width={232}
          height={280}
        />
      </View>
    )
  }

  render() {
    if (this.state?.isNotFoundError) {
      return this.renderNotFoundError();
    }
    if (this.state?.isNetworkError) {
      return this.renderNetworkError();
    }
    return (
      <React.Fragment>
        <View
          style={StyleSheet.absoluteFill}
        >
          {this.renderContent()}
        </View>
      </React.Fragment>
    );
  }
}

BaseScreen.prototype.shouldComponentUpdate = shouldComponentUpdate;


const styles = StyleSheet.create({
  underLogo: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})