import { isNaN, trim } from 'lodash';
import React, { createRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { TextInput } from 'react-native';

import BaseCommon from '../BaseCommon';
import Colors from '../../../../assets/Colors';

export default class InputField extends BaseCommon {
  static defaultProps = {
    useUnderLine: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      str: props.value,
      isFocus: false,
    };
    this.initialValue = props.value;
    this.displayName = 'InputField';
    this.inputRef = createRef(null);
  }


  onChangeText = (str) => {
    const { onChange } = this.props;
    let finalStr = str;
    if (this.isNumberType()) {
      if (isNaN(Number(trim(str)))) {
        finalStr = '0';
      }
    }
    this._debugLog('onChangeText', finalStr);
    onChange && onChange(finalStr);
  };

  onFocus = () => {
    this.setStateSafe({ isFocus: true });
    this.props.onFocus && this.props.onFocus();
  }

  onBlur = () => {
    this.setStateSafe({ isFocus: false });
  };

  blur = () => {
    this.inputRef?.current?.blur();
  }

  renderContent() {
    const {
      containerStyle,
      style,
      text,
      value,
      bold,
      secureTextEntry,
      ...otherProps
    } = this.props;
    const { str } = this.state;
    // const fontFamily = bold ? 'Manrope-ExtraBold' : 'Manrope-Medium';
    return (
      <View style={containerStyle}>
        <TextInput
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          style={[styles.staticStyle, style, { fontFamily }]}
          onChangeText={this.onChangeText}
          underlineColorAndroid="transparent"
          allowFontScaling={false}
          secureTextEntry={secureTextEntry}
          {...otherProps}
          ref={this.inputRef}
          value={str}
          placeholderTextColor={Colors.placeholder_input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconEye: {
    marginLeft: 12,
  },
  staticStyle: {
    paddingVertical: 8,
  },
});
