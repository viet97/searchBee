/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import BaseElement from '../BaseElement';
import PropTypes from 'prop-types';
import { View, StyleSheet, } from 'react-native';

class SearchBox extends BaseElement {
  constructor(props) {
    super(props);
    this.displayName = 'SearchBox';
    this.state = {

    };
  }

  renderContent() {
    return <View />
  }
}

const styles = StyleSheet.create({

});

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func, // search input value changed callback,

  onFocus: PropTypes.func, // search input focused callback
  onBlur: PropTypes.func, // search input blured callback

};

SearchBox.defaultProps = {

};

export default SearchBox;
