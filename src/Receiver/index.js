import {StyleSheet,View,Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import {  Toolbar,Subheader } from '../react-native-material-ui';
import QRCode from 'react-native-qrcode';

const propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const raisedButton={
  container:{height:50}

};

class Receiver extends Component {

  constructor (props)
  {
    super(props);
  }


  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigator.pop()}
          centerElement={'Receive Money'}
        />

        <View style={styles.vcontainer}>
          <Subheader text = 'Receive money : '/>
          <View style={styles.rowContainer}>
          </View>
          <QRCode
            value={this.props.route.myAddress}
            size={200}
            bgColor='purple'
            fgColor='white'/>
          <Text>
            {this.props.route.myAddress}
          </Text>
          <View style = {{height:100}}/>
        </View>
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
  },
  clipbutton: {
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
Receiver .propTypes = propTypes;
export default Receiver ;
