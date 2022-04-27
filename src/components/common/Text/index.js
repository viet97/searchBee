import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BaseCommon from '../BaseCommon';
import { normalize } from '../../../utils/DeviceUtil';
import Colors from '../../../../assets/Colors';
import { FontKey } from '../../../../assets/fonts/FontKey';

class CustomText extends BaseCommon {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayName = 'CustomText';
  }
  renderContent() {
    const {
      size,
      style,
      color,
      children,
      numberOfLines,
      bold,
      isLineThrough,
      font,
      ...otherProps
    } = this.props;
    const staticStyle = {};
    staticStyle.color = Colors.white
    if (color) {
      staticStyle.color = color;
    }
    const fontFamily = font || FontKey.regular
    staticStyle.fontSize = normalize(size);
    staticStyle.fontFamily = fontFamily
    return (
      <Text
        numberOfLines={numberOfLines}
        style={[
          styles.defaultText,
          style,
          staticStyle,
          isLineThrough
            ? {
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }
            : null,
        ]}
        allowFontScaling={false}
        {...otherProps}
      >
        {children}
      </Text>
    );
  }
}

CustomText.defaultProps = {
  size: 14,
};

const styles = StyleSheet.create({
  defaultText: {
    color: Colors.black,
  },
});

export default CustomText;
