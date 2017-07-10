  
import {StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import {Toolbar } from '../react-native-material-ui';
import QRCodeScanner from 'react-native-qrcode-scanner';
const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};
import Sender from '../Sender'


class Scanner extends Component {

  constructor (props)
  {
    super(props);
    this._onSuccess = this._onSuccess.bind(this);
  }
	_onSuccess(e)
	{
    this.props.navigator.push({Page:Sender,data:e.data,coin:this.props.route.coin,popNum:2});
	}

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
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
