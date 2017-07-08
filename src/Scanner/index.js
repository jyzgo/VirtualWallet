  
import {TouchableOpacity,  View, Text,StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import { ActionButton, Toolbar } from '../react-native-material-ui';

import QRCodeScreen from'../QRCodeScreen';
const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class Test extends Component{
  constructor(props){
    super(props);
    setTimeout(()=>this.testLog() , 3000);
  }
  testLog()
  {
  	console.log("test call");

  }
  render(){
  	return (<View/>);
	}

}

class Scanner extends Component {

	_onSuccess()
	{
		console.log('Success');
	}

	_onPressQRCode()
  {
    console.log("qr press");
  }
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
              <TouchableOpacity onPress={this._onPressQRCode}>
                <Text>Read QRCode</Text>
              </TouchableOpacity>
              <QRCodeScreen  />
				<Test testLog = {()=>console.log("override")}/>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
Scanner.propTypes = propTypes;
export default Scanner;
