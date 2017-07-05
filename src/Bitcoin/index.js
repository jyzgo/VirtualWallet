import { View, Text,StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import {Subheader, Button,ListItem, Toolbar } from '../react-native-material-ui';

import routes from '../routes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowContainer: {
		margin: 8,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		marginHorizontal: 8,
		width:100
	}
});
const propTypes = {
	navigator: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};
class Bitcoin extends Component {
	render() {
		return (
			<View style={styles.container}>
			<Toolbar
			leftElement="arrow-back"
			onLeftElementPress={() => this.props.navigator.pop()}
			centerElement={this.props.route.title}
			/>

			<Subheader text="Flat buttons" />
			<View style={styles.rowContainer}>
			<View style={styles.button}>
			<Button raised primary text="SendCoin" />
			</View>
			</View>

			</View>
		);
	}
}

Bitcoin.propTypes = propTypes;

export default Bitcoin;
