import * as React from 'react';
import BaseElement from '../BaseElement';
import { View, StyleSheet, } from 'react-native';
import RnRangeSlider from 'rn-range-slider';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import { FontKey } from '../../../../assets/fonts/FontKey';

class SBSlider extends BaseElement {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderThumb = () => <View
    style={styles.thumb} />

  renderRail = () => <View
    style={styles.rail} />

  renderRailSelected = () => <View style={styles.railSelected} />


  renderContent() {
    const {
      containerStyle,
      max,
      min,
      onValueChanged,
      leftValue,
      rightValue
    } = this.props
    return <View
      style={[styles.container, containerStyle]}>
      <RnRangeSlider
        min={min}
        max={max}
        step={1}
        minRange={1}
        style={{ flex: 1 }}
        renderThumb={this.renderThumb}
        renderRail={this.renderRail}
        renderRailSelected={this.renderRailSelected}
        onValueChanged={onValueChanged}
      />
      <View
        style={styles.labelRow}>
        <CustomText
          font={FontKey.bold}
          style={styles.label}>
          {leftValue}
        </CustomText>
        <CustomText
          font={FontKey.bold}
          style={styles.label}>
          {rightValue}
        </CustomText>
      </View>
    </View>
  }
}


const styles = StyleSheet.create({
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    justifyContent: 'space-between'
  },
  label: {
    lineHeight: 20,
    color: Colors.prussian_blue
  },
  railSelected: {
    height: 8,
    backgroundColor: Colors.prussian_blue,
    borderRadius: 2,
  },
  rail: {
    flex: 1,
    height: 8,
    borderRadius: 2,
    backgroundColor: Colors.pink_swan,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.prussian_blue,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    width: '100%'
  },
});


export default SBSlider;
