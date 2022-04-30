import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import SVGIcon from '../../../../assets/SVGIcon';
import SBButton from '../../common/SBButton';
import Image from '../../common/Image';
import { FontKey } from '../../../../assets/fonts/FontKey';
import { translation } from '../../../translation';
import Header from '../../element/Header';
import InputField from '../../common/InputField';

class EditAddressScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderAvatar = () => {
    return (
      <View
        style={styles.avatarContainer}>
        <View>
          <Image
            style={styles.avatar}
          />
          <SBButton
            style={styles.editAvatar}>
            <SVGIcon.edit_avatar
              width={60}
              height={60} />
          </SBButton>
        </View>
      </View>
    )
  }

  renderRow = ({
    title,
    Icon,
    onPress
  }) => {
    return (
      <View
        style={styles.rowContainer}>
        <Icon
          width={60}
          height={60} />
        <CustomText
          size={14}
          font={FontKey.bold}
          style={styles.rowTitle}>
          {title}
        </CustomText>
        <View
          style={styles.rowButtonContainer}>
          <SBButton
            onPress={onPress}>
            <SVGIcon.next
              width={60}
              height={60} />
          </SBButton>
        </View>
      </View>
    )
  }

  renderAddressInput = ({
    title,
    value,
    onChange,
    disabled,
    placeholder
  }) => {
    return (<View
      style={styles.AddressInputContainer}>
      <CustomText
        size={14}
        font={FontKey.bold}
        style={{
          lineHeight: 21
        }}>
        {title}
      </CustomText>
      <InputField
        containerStyle={styles.inputContainer}
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder} />
    </View>)
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <Header />
        <View
          style={{
            marginHorizontal: 30
          }}>
          {this.renderAvatar()}
          <CustomText
            font={FontKey.bold}
            size={32}
            numberOfLines={1}
            style={styles.userName}>
            Inidcasolutions
          </CustomText>
          {this.renderAddressInput({
            title: translation.address,
            disabled: true,
            value: "50-A Kautilya Marg, Chanakyapuri, New Delhi 110021"
          })}
          {this.renderAddressInput({
            title: translation.newAddress,
            placeholder: translation.insertNewAddress
          })}
          <SBButton
            style={styles.saveAddress}>
            <CustomText
              font={FontKey.bold}
              style={{
                lineHeight: 21
              }}>
              {translation.saveAddress}
            </CustomText>
          </SBButton>
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
)(EditAddressScreen);

const styles = StyleSheet.create({
  AddressInputContainer: {
    marginTop: 30
  },
  inputContainer: {
    marginTop: 10
  },
  saveAddress: {
    height: 60,
    backgroundColor: Colors.prussian_blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  userName: {
    lineHeight: 48,
    marginTop: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  editAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'red',
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
