import * as React from 'react';
import PropTypes from 'prop-types';
import {shouldComponentUpdate} from '../../utils/RenderUtil';
import BaseComponent from '../BaseComponent';
import {myLog} from '../../Debug';

export default class BaseElement extends BaseComponent {
  constructor(props) {
    super(props);
    this.displayName = 'BaseElement';
  }

  renderContent() {
    return null;
  }

  _debugLog = (...arg) => {
    if (this.debug) {
      myLog('Element (' + this.displayName + ') : ', ...arg);
    }
  };

  render() {
    if (this.renderContent) {
      return this.renderContent();
    }
    return null;
  }
}

BaseElement.prototype.shouldComponentUpdate = shouldComponentUpdate;

BaseElement.contextTypes = {
  displayScreen: PropTypes.string,
};
