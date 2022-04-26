import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import BaseElement from '../BaseElement';
import LoadingManager from './LoadingManager';
import { insets } from '../../../utils/DeviceUtil';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIndicator } from 'react-native-indicators';
import Text from '../../common/Text';
import Colors from '../../../../assets/Colors';

class Loading extends BaseElement {
  constructor(props) {
    super(props);
    this.displayName = 'Loading';
    this.state = {
      loading: false,
    };
    LoadingManager.getInstance().isVisible = false;
    this.isLoadingVideo = false
  }


  _visible = (loading = true) => {
    LoadingManager.getInstance().isVisible = loading;
    this.setStateSafe({ loading });
  };

  renderContent() {
    const { loading } = this.state;
    const isShow = loading || (this.isLoadingVideo && this.props.loading);
    let containerStyle = {
      ...StyleSheet.absoluteFill,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.backgroundLoading,
      bottom: -insets.bottom,
    };

    if (this.isLoadingVideo) {
      containerStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        width: 33,
        height: 33,
      };
    }
    if (isShow) {
      return (
        <SafeAreaView
          style={containerStyle}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIndicator color={Colors.mainColor} size={40} />
          </View>
          <Text style={{ color: Colors.bottom_title, marginTop: 8 }}>
            Loading.
          </Text>
          <Text style={{ color: Colors.bottom_title }}>
            Please wait...
          </Text>
        </SafeAreaView>
      );
    }
    return null;
  }
}

Loading.propTypes = {
  isLoadingVideo: PropTypes.bool,
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoadingVideo: false,
  loading: false,
};

export default Loading;
