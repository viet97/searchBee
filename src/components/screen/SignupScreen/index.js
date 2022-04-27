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
import Header from '../../element/Header';

class SignupScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <Header />

        <View
          style={styles.contentContainer}>
          <CustomText
            font={FontKey.bold}
            size={24}
            style={styles.welcome}>
            Don't Have an Account
          </CustomText>
          <CustomText
            size={16}
            style={styles.title}>
            Fills All The Fields Correctly
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
        </View>
      </View >
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
  password: {
    marginTop: 30
  },
  username: {
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
    marginTop: 30,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
