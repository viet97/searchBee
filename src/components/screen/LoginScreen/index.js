import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import InputField from '../../common/InputField';
import SVGIcon from '../../../../assets/SVGIcon';

class LoginScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 30,
            alignItems: 'center'
          }}>
          <CustomText
            bold
            size={24}
            style={{
              marginTop: 100,
              lineHeight: 36,
            }}>
            welcome to Search Bee
          </CustomText>
          <CustomText
            size={16}
            style={{
              marginTop: 4,
              lineHeight: 24
            }}>
            Insert Email and Password
          </CustomText>

          <InputField
            containerStyle={{
              marginTop: 60
            }}
            placeholder={"insert email or mobile number"}
            Icon={SVGIcon.username}
          />
          <InputField
            containerStyle={{
              marginTop: 30
            }}
            placeholder={"insert password here"}
            Icon={SVGIcon.password}
            secureTextEntry
          />
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
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
