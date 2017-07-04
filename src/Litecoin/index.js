import { View,Text, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { ListItem, Toolbar } from '../react-native-material-ui';

import routes from '../routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};
class Litcoin extends Component {
    render() {
        return (
            <View style={styles.container}>
                          <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
   <Text>Litcoin</Text> 
            </View>
        );
    }
}

Litcoin.propTypes = propTypes;

export default Litcoin;
