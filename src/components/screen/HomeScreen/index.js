import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';
import { UserAction } from '../../../actions';
import Colors from '../../../../assets/Colors';

class HomeScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state?.user?.profile
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
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreenColor,
  },
});
