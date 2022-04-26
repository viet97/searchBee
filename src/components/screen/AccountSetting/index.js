import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import { Text } from '../../common';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { Colors } from '../../../themes/Colors';
import { getStateForKeys } from '../../../utils/Util';
import { TouchablePlatform } from '../../../modules/TouchablePlatform';
import NavigationService from '../../../navigation/NavigationService';
import { ROUTER_NAME } from '../../../navigation/NavigationConst';
import { UserAction } from '../../../actions';
import EnterUtil from '../../../utils/EnterUtil';
import SVGIcon from '../../../../assets/SVGIcon';

class AccountSetting extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderRow = (key, onPress = () => { }) => {
    return (
      <TouchablePlatform onPress={onPress} style={styles.rowContainer}>
        <Text>{key || ''}</Text>
        <View style={styles.rightArrowContainer}>
          <SVGIcon.right_arrow width={24} height={24} />
        </View>
      </TouchablePlatform>
    );
  };

  goToPersonalInformation = () => {
    NavigationService.getInstance().navigate({
      routerName: ROUTER_NAME.ACCOUNT_INFORMATION.name,
    });
  };

  _componentDidMount() {
    const { getStore, getBuyerCompanies } = this.props;
    getStore();
    getBuyerCompanies();
  }

  renderCompanyAndStore = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text size={12} bold style={styles.settings}>
          Settings
        </Text>
        <View style={styles.settingsContainer}>
          {this.renderRow('Personal Information', () =>
            NavigationService.getInstance().navigate({
              routerName: ROUTER_NAME.ACCOUNT_INFORMATION.name,
            })
          )}
          {this.renderRow('Store Information', () =>
            NavigationService.getInstance().navigate({
              routerName: ROUTER_NAME.STORE_INFORMATION.name,
            })
          )}
          {this.renderRow('Company Information', () =>
            NavigationService.getInstance().navigate({
              routerName: ROUTER_NAME.COMPANY_INFORMATION.name,
            })
          )}
          {this.renderRow('Payment Settings', EnterUtil.onEnterPaymentMethod)}
        </View>
      </View>
    );
  };

  renderPrivacy = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text size={12} bold style={styles.privacy}>
          Privacy
        </Text>
        <View style={styles.settingsContainer}>
          {this.renderRow('Change Password', () =>
            NavigationService.getInstance().navigate({
              routerName: ROUTER_NAME.CHANGE_PASSWORD.name,
            })
          )}
          {this.renderRow('Logout', () => {
            EnterUtil.onEnterLogout();
            NavigationService.getInstance().goBack();
          })}
        </View>
      </View>
    );
  };

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderHeader({
          renderCenter: () => this.renderTitleCenter('Account Settings'),
          isBack: true,
        })}
        <ScrollView style={{ flex: 1 }}>
          {this.renderCompanyAndStore()}
          {this.renderPrivacy()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: getStateForKeys(state, ['User', 'profile']),
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    getStore: () => dispatch(UserAction.getStores()),
    getBuyerCompanies: () => dispatch(UserAction.getBuyerCompanies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(AccountSetting));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreenColor,
  },
  privacy: { color: Colors.bottom_title, marginLeft: 16 },
  sectionContainer: {
    marginTop: 24,
  },
  settingsContainer: { backgroundColor: Colors.white, marginTop: 8 },
  settings: { color: Colors.bottom_title, marginLeft: 16 },
  rightArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: Colors.inActiveUnderlineInput,
    paddingHorizontal: 16,
  },
});
