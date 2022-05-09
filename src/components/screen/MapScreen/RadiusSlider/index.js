import * as React from 'react';
import BaseElement from '../../../element/BaseElement';
import SBSlider from '../../../element/SBSlider';

class RadiusSlider extends BaseElement {
  constructor(props) {
    super(props);
    this.state = {
      radiusFrom: 0,
      radiusTo: 100
    }
  }

  onValueChanged = (radiusFrom, radiusTo) => {
    this.setStateSafe({ radiusFrom, radiusTo })
  }

  renderContent() {
    return <SBSlider
      containerStyle={{
        marginTop: 10
      }}
      min={0}
      max={100}
      leftValue={this.state.radiusFrom}
      rightValue={this.state.radiusTo}
      onValueChanged={this.onValueChanged} />
  }
}

export default RadiusSlider;
