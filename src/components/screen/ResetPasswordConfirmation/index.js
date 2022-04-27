import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import InputField from '../../common/InputField';
import SVGIcon from '../../../../assets/SVGIcon';
import Header from '../../element/Header';
import { translation } from '../../../translation';
import { FontKey } from '../../../../assets/fonts/FontKey';
import SBButton from '../../common/SBButton';
import NavigationService from '../../../navigation/NavigationService';
import { ROUTER_NAME } from '../../../navigation/NavigationConst';


class ResetPasswordConfirmation extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {this.renderUnderLogo()}
          <View
            style={styles.contentContainer}
          >
            <CustomText
              font={FontKey.bold}
              size={32}
              style={{ lineHeight: 48 }}
            >
              {translation.resetPassword}
            </CustomText>
            <CustomText
              size={16}
              style={styles.resetDes}
            >
              {translation.resetPasswordConfirmationDes}
            </CustomText>
            <InputField
              placeholder={translation.insertOldPassword}
              Icon={SVGIcon.password}
              containerStyle={styles.inputContainer} />
            <InputField
              placeholder={translation.insertNewPassword}
              Icon={SVGIcon.password}
              containerStyle={styles.inputContainer} />
            <InputField
              placeholder={translation.insertConfirmationPassword}
              Icon={SVGIcon.password}
              containerStyle={styles.inputContainer} />
            <SBButton
              style={styles.resetButton}>
              <CustomText
                font={FontKey.bold}
                style={{
                  textAlign: 'center',
                }}>
                {translation.resetPassword}
              </CustomText>
            </SBButton>
            <View
              style={styles.rememberPassRow}>
              <CustomText size={14}>{translation.rememberYourPassword}</CustomText>
              <SBButton
                onPress={() => NavigationService.getInstance().navigate({ routerName: ROUTER_NAME.LOGIN_SCREEN.name })}
                hitSlop={12}>
                <CustomText
                  font={FontKey.bold}
                  size={14}>{" " + translation.signin}</CustomText>
              </SBButton>
            </View>
          </View>
          <Header
            containerStyle={{
              position: 'absolute'
            }} />
        </View>
      </TouchableWithoutFeedback>
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
)(ResetPasswordConfirmation);

const styles = StyleSheet.create({
  rememberPassRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  resetButton: {
    height: 60,
    backgroundColor: Colors.prussian_blue,
    borderRadius: 10,
    alignItem: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  inputContainer: {
    marginTop: 30
  },
  resetDes: { lineHeight: 24, marginTop: 4 },
  contentContainer: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 60
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
