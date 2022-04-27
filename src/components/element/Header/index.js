import * as React from 'react';
import BaseElement from '../BaseElement';
import { View, StyleSheet, } from 'react-native';
import Colors from '../../../../assets/Colors';
import SBButton from '../../common/SBButton';
import SVGIcon from '../../../../assets/SVGIcon';
import NavigationService from '../../../navigation/NavigationService';
import { insets } from '../../../utils/DeviceUtil';

export const HEADER_HEIGHT = 40

class Header extends BaseElement {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
    this.state = {

    };
  }

  renderContent() {
    const {
      containerStyle
    } = this.props
    return <View
      style={[styles.container, containerStyle]}>
      <SBButton
        onPress={() => NavigationService.getInstance().goBack()}>
        <SVGIcon.dark_back
          width={40}
          height={40} />
      </SBButton>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    height: HEADER_HEIGHT,
    paddingHorizontal: 30,
    marginTop: insets.top
  },
});


export default Header;
