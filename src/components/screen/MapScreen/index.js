import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import BaseScreen from '../BaseScreen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Header from '../../element/Header';

import { heightDevice, insets, widthDevice } from '../../../utils/DeviceUtil';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import { translation } from '../../../translation';
import { FontKey } from '../../../../assets/fonts/FontKey';
import InputField from '../../common/InputField';
import SBButton from '../../common/SBButton';
import RadiusSlider from './RadiusSlider';
import ValidSlider from './ValidSlider';

const sheetWidth = widthDevice - 60
const sheetTopLine = (widthDevice - 60) / 2.1
const sheetBottomPadding = insets.bottom ? 16 + insets.bottom : 30

class MapScreen extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      radiusFrom: 0,
      radiusTo: 100
    }
    this.configurationSheetY = new Animated.Value(0)
    this.configurationSheetHeight = 0

    this.failedSheetY = new Animated.Value(heightDevice)
    this.failedSheetHeight = 0
  }

  enableConfigurationSheet = (enable, onFinish) => {
    const toValue = enable ? 0 : this.configurationSheetHeight

    Animated.timing(this.configurationSheetY, {
      toValue,
      useNativeDriver: true,
      duration: 200
    }).start(onFinish)
  }

  enableFailedSheet = (enable, onFinish) => {
    const toValue = enable ? 0 : this.failedSheetHeight

    Animated.timing(this.failedSheetY, {
      toValue,
      useNativeDriver: true,
      duration: 200
    }).start(onFinish)
  }

  renderBroadcastConfiguration = () => {
    return (
      <Animated.View
        onLayout={(e) => this.configurationSheetHeight = e.nativeEvent.layout.height}
        style={[styles.broadcastConfigurationContainer, {
          transform: [
            { translateY: this.configurationSheetY }
          ]
        }]}>
        <View
          style={styles.configurationTopLine} />
        <View
          style={styles.configurationContent}>
          <CustomText
            font={FontKey.bold}
            style={{
              color: Colors.prussian_blue
            }}>
            {translation.searchCity}
          </CustomText>
          <InputField
            placeholder={translation.insertCityName}
            containerStyle={styles.insertCity} />
          <CustomText
            font={FontKey.bold}
            style={styles.radius}>
            {translation.radius}
          </CustomText>
          <RadiusSlider />
          <CustomText
            font={FontKey.bold}
            style={styles.radius}>
            {translation.validTo}
          </CustomText>
          <ValidSlider />
        </View>
        <SBButton
          onPress={() => {
            this.enableConfigurationSheet(false, () => this.enableFailedSheet(true))
          }}
          style={styles.broadcast}>
          <CustomText
            size={12}
            font={FontKey.bold}
            style={{
              color: Colors.white
            }}>
            {translation.broadcast}
          </CustomText>
        </SBButton>
      </Animated.View>
    )
  }

  renderBroadcastFailed = () => {
    return <Animated.View
      onLayout={(e) => {
        if (!this.failedSheetHeight) {
          this.failedSheetHeight = e.nativeEvent.layout.height
          this.enableFailedSheet(false)
        }
      }}
      style={[styles.broadcastFailedContainer, {
        transform: [
          { translateY: this.failedSheetY }
        ]
      }]}>
      <View
        style={styles.broadcastFailedTopLine} />
      <View
        style={styles.broadcastFailedContent}>
        <CustomText
          size={16}
          font={FontKey.bold}
          style={{
            color: Colors.prussian_blue
          }}>
          {translation.allPharmaciesClosed}
        </CustomText>
        <CustomText
          size={12}
          style={styles.broadcastFailedTitle}>
          {translation.allPharmaciesClosedDes}
        </CustomText>
        <View
          style={styles.buttonRow}>
          <SBButton
            onPress={() => {
              this.enableFailedSheet(false, () => this.enableConfigurationSheet(true))
            }}
            style={styles.backToMenu}
          >
            <CustomText
              size={12}
              font={FontKey.bold}
              style={{
                color: Colors.prussian_blue
              }}>
              {translation.backToMenu}
            </CustomText>
          </SBButton>
          <SBButton
            style={styles.broadcastAgain}
          >
            <CustomText
              size={12}
              font={FontKey.bold}
            >
              {translation.broadcastAgain}
            </CustomText>
          </SBButton>
        </View>
      </View>
    </Animated.View>
  }

  region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }
  renderContent() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.region}
        >
        </MapView>
        <Header
          containerStyle={{
            position: 'absolute'
          }} />
        {this.renderBroadcastConfiguration()}
        {this.renderBroadcastFailed()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);

const styles = StyleSheet.create({
  broadcastAgain: {
    backgroundColor: Colors.prussian_blue,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.prussian_blue,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 15
  },
  backToMenu: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.prussian_blue,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 15
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30
  },
  broadcastFailedTitle: {
    color: Colors.prussian_blue,
    marginTop: 10,
    textAlign: 'center'
  },
  broadcastFailedContent: {
    marginTop: 36,
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  broadcastFailedTopLine: {
    width: sheetTopLine,
    height: 4,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    backgroundColor: Colors.prussian_blue,
  },
  broadcastFailedContainer: {
    position: 'absolute',
    bottom: 0,
    width: sheetWidth,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingBottom: sheetBottomPadding,
    alignItems: 'center'
  },
  broadcast: {
    backgroundColor: Colors.prussian_blue,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 30
  },
  radius: {
    color: Colors.prussian_blue,
    marginTop: 30
  },
  insertCity: {
    marginTop: 10,
    backgroundColor: Colors.mercury,
    height: 50
  },
  configurationContent: {
    marginTop: 24,
    flex: 1,
    width: '100%'
  },
  configurationTopLine: {
    width: sheetTopLine,
    height: 6,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    backgroundColor: Colors.prussian_blue,
  },
  broadcastConfigurationContainer: {
    position: 'absolute',
    bottom: 0,
    width: sheetWidth,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingBottom: sheetBottomPadding,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
