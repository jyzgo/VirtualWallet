import { View,Text, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { Toolbar } from '../react-native-material-ui';
import  constValue from '../constValue';
import  CoinWindow from  '../CoinWindow';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const propTypes = {
    navigator: PropTypes.object.isRequired,
    // route: PropTypes.object.isRequired,
};
class Bitcoin extends Component {
    render() {
        return (
            <View style={styles.container}>
                          <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={'Bitcoin'}
                />
              <CoinWindow coin ={constValue.bitcoin} />
            </View>
        );
    }
}

Bitcoin.propTypes = propTypes;

export default Bitcoin;
