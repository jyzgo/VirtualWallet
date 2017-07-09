import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import {Subheader, Button,Toolbar } from '../react-native-material-ui';

import Scanner from '../Scanner';
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
		width:260,
    height:50
	}
	,clipbutton: {
		marginHorizontal: 8,
		width:260,
		height:50
	},

	 vcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		 
  }
});

const raisedButton={
		container:{height:50}

	};

const propTypes = {
	navigator: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};
class Bitcoin extends Component {
	onScan()
	{
		this.props.navigator.push({title:'Bitcoin Scanner',Page:Scanner,coin:'bitcoin'});
	}
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
					<Subheader  style = {{text:{fontSize:20}}} text="Send Money" />
				</View>
				<View style={styles.rowContainer}>
					<View style={styles.button}>
						<Button raised primary upperCase={false} text="Scan QR code" style={raisedButton} icon="camera-enhance" onPress={()=>this.onScan()} />
					</View>
				</View>
			<View style={styles.rowContainer}>
					<View style={styles.clipbutton}>
						<Button raised primary upperCase={false} text="Pay address from clipboard" style={raisedButton}/>
					</View>
				</View>
				<View style={{height:150}}/>
		
			</View>

			</View>
		);
	}
}

Bitcoin.propTypes = propTypes;

export default Bitcoin;
