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
import { insets } from '../../../utils/DeviceUtil';
import NavigationService from '../../../navigation/NavigationService';
import InputField from '../../common/InputField';
import KeyboardScrollView from '../../element/KeyboardScrollView';

class UploadPrescription extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    return (
      <View
        style={styles.headerContentContainer}>
        <SBButton
          onPress={() => NavigationService.getInstance().goBack()}>
          <SVGIcon.light_back
            width={40}
            height={40} />
        </SBButton>
        <View
          style={{
            marginLeft: 10
          }}>
          <CustomText
            style={{
              lineHeight: 12
            }}
            size={8}>
            {translation.location}
          </CustomText>
          <View
            style={styles.rowCenter}>
            <CustomText
              font={FontKey.bold}
              size={12}
              style={styles.location}>
              New Delhi
            </CustomText>
            <SVGIcon.down_arrow
              width={10}
              height={10}
            />
          </View>
        </View>
      </View>
    )
  }

  renderUploadPrescription = () => {
    return (
      <SVGIcon.upload_prescription
        style={styles.uploadPrescription} />
    )
  }

  renderOptions = () => {
    return (
      <View
        style={styles.optionContainer}>
        <View
          style={{
            flexDirection: 'row'
          }}>
          <SBButton
            style={[styles.optionButton, {
              marginRight: 30
            }]}>
            <SVGIcon.camera width={20} height={20} />
            <CustomText
              size={13}
              style={styles.optionLabel}>
              {translation.camera}
            </CustomText>
          </SBButton>
          <SBButton
            style={styles.optionButton}>
            <SVGIcon.gallery width={20} height={20} />
            <CustomText
              size={13}
              style={styles.optionLabel}>
              {translation.gallery}
            </CustomText>
          </SBButton>
        </View>
        <InputField
          containerStyle={{
            marginTop: 30
          }}
          placeholder={translation.insertMedicineName} />
        <SBButton
          style={styles.uploadButton}>
          <CustomText
            font={FontKey.bold}>
            {translation.upload}
          </CustomText>
        </SBButton>
      </View>
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <KeyboardScrollView>
          <View
            style={styles.headerContainer}>
            {this.renderUploadPrescription()}
          </View>
          {this.renderOptions()}
        </KeyboardScrollView>
        {this.renderHeader()}
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
)(UploadPrescription);

const styles = StyleSheet.create({
  uploadButton: {
    height: 60,
    backgroundColor: Colors.prussian_blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30
  },
  optionLabel: {
    color: Colors.prussian_blue,
    marginLeft: 10
  },
  optionButton: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
    shadowRadius: 10,
    shadowOpacity: 0.02,
    flex: 1,
  },
  uploadPrescription: {
    flex: 1,
    marginTop: 70 + insets.top
  },
  optionContainer: {
    marginHorizontal: 30,
    marginTop: 30
  },
  location: {
    lineHeight: 18,
    marginRight: 4
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerContentContainer: {
    marginTop: insets.top,
    flexDirection: 'row',
    alignItems: "center",
    position: 'absolute',
    left: 30
  },
  headerContainer: {
    backgroundColor: Colors.prussian_blue,
    paddingHorizontal: 30,
    paddingBottom: 30
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
