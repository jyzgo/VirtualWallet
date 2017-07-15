import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import  constValue from '../constValue';
import  CoinWindow from  '../CoinWindow';
import {  Toolbar } from '../react-native-material-ui';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
class Ethereum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigator.pop()}
          centerElement={this.props.route.title}
        />
        <CoinWindow coin = {constValue.ethereum}navigator={this.props.navigator} />
      </View>
    );
  }
}

Ethereum.propTypes = propTypes;

export default Ethereum;

