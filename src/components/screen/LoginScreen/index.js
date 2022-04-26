import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import InputField from '../../common/InputField';
import SVGIcon from '../../../../assets/SVGIcon';
import SBButton from '../../common/SBButton';
import { insets } from '../../../utils/DeviceUtil';

class LoginScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <View
          style={styles.contentContainer}>
          <View
            style={styles.underLogo}>
            <SVGIcon.splash_logo
              width={232}
              height={280}
            />
          </View>
          <CustomText
            bold
            size={24}
            style={styles.welcome}>
            welcome to Search Bee
          </CustomText>
          <CustomText
            size={16}
            style={styles.title}>
            Insert Email and Password
          </CustomText>

          <InputField
            containerStyle={styles.username}
            placeholder={"insert email or mobile number"}
            Icon={SVGIcon.username}
          />
          <InputField
            containerStyle={styles.password}
            placeholder={"insert password here"}
            Icon={SVGIcon.password}
            secureTextEntry
          />
          <SBButton
            hitSlop={8}
            style={styles.forgotPassword}>
            <CustomText
              bold
              size={12}
              style={{
                lineHeight: 18,
              }}>
              Forgot Password?
            </CustomText>
          </SBButton>

          <SBButton
            hitSlop={8}
            style={styles.signin}>
            <CustomText
              bold
              size={14}
              style={{
                lineHeight: 21,
              }}>
              Sign In
            </CustomText>
          </SBButton>
          <CustomText
            size={11}
            style={styles.loginWith}>
            or login with
          </CustomText>
          <View
            style={styles.socialLoginRow}>
            <SBButton
              style={{
                marginRight: 30
              }}>
              <SVGIcon.gmail
                width={60}
                height={60} />
            </SBButton>
            <SBButton>
              <SVGIcon.fb
                width={60}
                height={60} />
            </SBButton>
          </View>
          <View
            style={styles.signupRow}>
            <CustomText
              size={14}
              style={{
                lineHeight: 21
              }}>Don’t Have a Account?</CustomText>
            <SBButton
              hitSlop={16}>
              <CustomText
                bold
                size={14}
                style={{
                  lineHeight: 21
                }}>{" "}Sign Up</CustomText>
            </SBButton>
          </View>
        </View>
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
)(LoginScreen);

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
  password: {
    marginTop: 30
  },
  username: {
    marginTop: 60
  },
  title: {
    marginTop: 4,
    lineHeight: 24
  },
  welcome: {
    marginTop: 60,
    lineHeight: 36,
  },
  underLogo: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
