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

class ProfileScreen extends BaseScreen {
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

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <Header />
        {this.renderAvatar()}
        <CustomText
          font={FontKey.bold}
          size={32}
          numberOfLines={1}
          style={{
            lineHeight: 48,
            marginTop: 30,
            alignSelf: 'center',
            textAlign: 'center',
            marginHorizontal: 30
          }}>
          Inidcasolutions
        </CustomText>
        {this.renderRow({ title: translation.editName, Icon: SVGIcon.edit_name })}
        {this.renderRow({ title: translation.resetPassword, Icon: SVGIcon.reset_password })}
        {this.renderRow({ title: translation.address, Icon: SVGIcon.edit_address })}
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
)(ProfileScreen);

const styles = StyleSheet.create({
  rowButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  rowTitle: {
    lineHeight: 21,
    marginLeft: 20
  },
  rowContainer: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
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
