import { isNaN, trim } from 'lodash';
import React, { createRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import BaseCommon from '../BaseCommon';
import Colors from '../../../../assets/Colors';
import { FontKey } from '../../../../assets/fonts/FontKey';

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
    this.setStateSafe({ str })
    onChange && onChange(str);
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
      bold,
      Icon,
      font,
      disabled,
      ...otherProps
    } = this.props;
    const { str } = this.state;
    const fontFamily = font || FontKey.regular
    return (
      <View
        style={[styles.container, {
          paddingLeft: Icon ? 20 : 0,
          backgroundColor: disabled ? Colors.pink_swan : Colors.white
        }, containerStyle]}>
        {Icon ? <Icon width={24} height={24} /> : null}
        <TextInput
          editable={!disabled}
          ref={this.inputRef}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          style={[styles.staticStyle, {
            paddingLeft: 10,
            fontFamily,
            color: disabled ? Colors.white : Colors.prussian_blue
          }, style]}
          onChangeText={this.onChangeText}
          underlineColorAndroid="transparent"
          allowFontScaling={false}
          placeholderTextColor={Colors.prussian_blue}
          {...otherProps}
          value={str}
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
    flex: 1,
    paddingLeft: 10,
    fontSize: 12,
    color: Colors.prussian_blue
  },
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  }
});
