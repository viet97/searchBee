import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import BaseCommon from '../BaseCommon';

class SBButton extends BaseCommon {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayName = 'SBButton';
  }
  renderContent() {
    const {
      element,
      children,
      ...otherProps
    } = this.props;
    const ButtonElement = element || Pressable
    return (
      <ButtonElement
        {...otherProps}
      >
        {children}
      </ButtonElement>
    );
  }
}

const styles = StyleSheet.create({

});

export default SBButton;
