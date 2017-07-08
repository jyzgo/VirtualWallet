  
import {TouchableOpacity,  View, Text,StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import { ActionButton, Toolbar } from '../react-native-material-ui';
import QRCodeScanner from 'react-native-qrcode-scanner';
const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};


class Scanner extends Component {

  constructor (props)
  {
    super(props);
    this.state={text:"Nolink"};
    this._onSuccess = this._onSuccess.bind(this);
    setInterval(()=>{console.log("tt")
    },2000);
  }
	_onSuccess(e)
	{
		console.log('Success'+ e);
		//this.props.navigator.pop();
	  this.setState({text:e});
			//  Linking.openURL(e.data).catch(err => console.error('An error occured', err));
	}

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
              <Text>
                {this.state.text}
              </Text>
              <QRCodeScanner onRead={(e)=>this._onSuccess(e)}/>
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
