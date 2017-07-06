import { View, Text,StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
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
		width:260
	}
	,clibbutton: {
		marginHorizontal: 8,
		width:260
	}
	,
	 vcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		 
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
			<View style={styles.vcontainer}>

				<View style={styles.rowContainer}>
					<Subheader  text="Send Money" />
				</View>
				<View style={styles.rowContainer}>
					<View style={styles.button}>
						<Button raised primary text="Scan QR code" icon="camera-enhance" />
					</View>
				</View>
			<View style={styles.rowContainer}>
					<View style={styles.clibbutton}>
						<Button raised primary text="Pay address from clipboard" />
					</View>
				</View>
			       <Icon.Button name="ios-qr-scanner" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>scan QR code</Text>
  </Icon.Button> 
			</View>

			</View>
		);
	}
}

Bitcoin.propTypes = propTypes;

export default Bitcoin;
