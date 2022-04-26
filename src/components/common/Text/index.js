import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BaseCommon from '../BaseCommon';
import { normalize } from '../../../utils/DeviceUtil';
import Colors from '../../../../assets/Colors';

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
      ...otherProps
    } = this.props;
    const staticStyle = {};
    if (color) {
      staticStyle.color = color;
    }
    // const fontFamily = bold ? 'Manrope-ExtraBold' : 'Manrope-Medium';
    staticStyle.fontSize = normalize(size);
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
