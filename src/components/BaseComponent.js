import * as React from 'react';
import { myLog } from '../Debug';
import { shouldComponentUpdate } from '../utils/RenderUtil';
import { debug } from "../config/env"
export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BaseComponent';
    this.mounted = true;
    this.debug = debug
  }

  componentDidMount() {
    this._componentDidMount && this._componentDidMount();
  }

  componentWillUnmount() {
    this.mounted = false;
    this._componentWillUnmount && this._componentWillUnmount();
  }

  callbackSafe = (cb, ...arg) => {
    if (!this.mounted) {
      return;
    }
    cb && cb.call(this, ...arg);
  };

  setStateSafe = (state, callback) => {
    this.callbackSafe(() => this.setState(state, callback));
  };

  _debugLog = (...arg) => {
    if (this.debug) {
      myLog('(' + this.displayName + ') : ', ...arg);
    }
  };

  renderContent() {
    return null;
  }

  render() {
    if (this.renderContent) {
      return this.renderContent();
    }
    return null;
  }
}

BaseComponent.prototype.shouldComponentUpdate = shouldComponentUpdate;
