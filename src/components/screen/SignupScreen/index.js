import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import InputField from '../../common/InputField';
import SVGIcon from '../../../../assets/SVGIcon';
import { insets } from '../../../utils/DeviceUtil';
import { FontKey } from '../../../../assets/fonts/FontKey';
import Header, { HEADER_HEIGHT } from '../../element/Header';
import { translation } from '../../../translation';
import KeyboardScrollView from '../../element/KeyboardScrollView';
import SBButton from '../../common/SBButton';

class SignupScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}

        <KeyboardScrollView
          style={{ flex: 1 }}>
          <View
            style={styles.contentContainer}>
            <CustomText
              font={FontKey.bold}
              size={24}
              style={styles.welcome}>
              {translation.dontHaveAnAccount}
            </CustomText>
            <CustomText
              size={16}
              style={styles.title}>
              {translation.fillAllFields}
            </CustomText>
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insetEmail}
              Icon={SVGIcon.mail}
            />
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insertMobile}
              Icon={SVGIcon.phone}
            />
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insertFullName}
              Icon={SVGIcon.username}
            />
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insertLocation}
              Icon={SVGIcon.location}
            />
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insertPassword}
              Icon={SVGIcon.password}
            />
            <InputField
              containerStyle={styles.field}
              placeholder={translation.insertConfirmationPassword}
              Icon={SVGIcon.password}
            />
          </View>
          <SBButton
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.prussian_blue,
              marginHorizontal: 30,
              marginBottom: 60,
              borderRadius: 10,
              marginTop: 52
            }}>
            <CustomText
              size={14}
              font={FontKey.bold}
              style={{
                lineHeight: 21
              }}>
              {translation.signup}
            </CustomText>
          </SBButton>
        </KeyboardScrollView>
        <Header
          containerStyle={{
            position: 'absolute'
          }} />
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
)(SignupScreen);

const styles = StyleSheet.create({
  signupRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: insets.bottom || 24
  },
  socialLoginRow: {
    flexDirection: 'row',
    marginTop: 16
  },
  loginWith: {
    lineHeight: 17,
    marginTop: 16
  },
  signin: {
    marginTop: 10,
    backgroundColor: Colors.prussian_blue,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 186
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10
  },
  field: {
    marginTop: 30
  },
  title: {
    marginTop: 4,
    lineHeight: 24
  },
  welcome: {
    lineHeight: 36,
    marginTop: 4
  },
  contentContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 30 + HEADER_HEIGHT + insets.top,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
