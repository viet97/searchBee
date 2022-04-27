import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import InputField from '../../common/InputField';
import SVGIcon from '../../../../assets/SVGIcon';
import SBButton from '../../common/SBButton';
import { insets } from '../../../utils/DeviceUtil';
import { FontKey } from '../../../../assets/fonts/FontKey';
import NavigationService from '../../../navigation/NavigationService';
import { ROUTER_NAME } from '../../../navigation/NavigationConst';
import { translation } from '../../../translation';

class LoginScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <KeyboardAvoidingView
          style={{
            flex: 1
          }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
              style={styles.contentContainer}>
              <CustomText
                font={FontKey.bold}
                size={24}
                style={styles.welcome}>
                {translation.welcome}
              </CustomText>
              <CustomText
                size={16}
                style={styles.title}>
                {translation.welcomeDes}
              </CustomText>

              <InputField
                containerStyle={styles.username}
                placeholder={translation.usernamePlaceholder}
                Icon={SVGIcon.username}
              />
              <InputField
                containerStyle={styles.password}
                placeholder={translation.passwordPlaceholder}
                Icon={SVGIcon.password}
                secureTextEntry
              />
              <SBButton
                onPress={() => NavigationService.getInstance().navigate({ routerName: ROUTER_NAME.RESET_PASSWORD })}
                hitSlop={8}
                style={styles.forgotPassword}>
                <CustomText
                  font={FontKey.bold}
                  size={12}
                  style={{
                    lineHeight: 18,
                  }}>
                  {translation.forgotPassword}
                </CustomText>
              </SBButton>

              <SBButton
                hitSlop={8}
                style={styles.signin}>
                <CustomText
                  font={FontKey.bold}
                  size={14}
                  style={{
                    lineHeight: 21,
                  }}>
                  {translation.signin}
                </CustomText>
              </SBButton>
              <CustomText
                size={11}
                style={styles.loginWith}>
                {translation.orLoginWith}
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
                  }}>{`${translation.dontHaveAnAccount}?`}</CustomText>
                <SBButton
                  onPress={() => NavigationService.getInstance().navigate({ routerName: ROUTER_NAME.SIGNUP.name })}
                  hitSlop={16}>
                  <CustomText
                    font={FontKey.bold}
                    size={14}
                    style={{
                      lineHeight: 21
                    }}>{` ${translation.signup}`}</CustomText>
                </SBButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
