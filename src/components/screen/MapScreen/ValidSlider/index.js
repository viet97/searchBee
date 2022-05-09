import * as React from 'react';
import BaseElement from '../../../element/BaseElement';
import SBSlider from '../../../element/SBSlider';

class ValidSlider extends BaseElement {
  constructor(props) {
    super(props);
    this.state = {
      validFrom: 0,
      validTo: 100
    }
  }

  onValueChanged = (validFrom, validTo) => {
    this.setStateSafe({ validFrom, validTo })
  }

  renderContent() {
    return <SBSlider
      containerStyle={{
        marginTop: 10
      }}
      min={0}
      max={100}
      leftValue={this.state.validFrom}
      rightValue={this.state.validTo}
      onValueChanged={this.onValueChanged} />
  }
}

export default ValidSlider;
