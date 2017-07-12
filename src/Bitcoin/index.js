import { Clipboard, View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import {Subheader, Button,Toolbar } from '../react-native-material-ui';

import Scanner from '../Scanner';
import Sender from  '../Sender';
import Receiver from '../Receiver';
import 'wallet/shim' // make sure to use es6 import and not require()
import Bitcoin from 'react-native-bitcoinjs-lib'
var RNFS = require('react-native-fs');
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
const TITLE_NAME = 'BitcoinWindow Scanner';
const COIN_NAME = 'bitcoin';
const myaddress='myaddress12343';
const filepath = RNFS.DocumentDirectoryPath + '/bw.d';

class BitcoinWindow extends Component {
  constructor (props)
  {
    super(props);
    RNFS.exists(filepath).then(
      ()=>{
        console.log('File exist');
      },
      ()=>{
        console.log("File not");
        // write the file
        RNFS.writeFile(filepath, 'Lorem ipsum dolor sit amet', 'utf8')
          .then((success) => {
            console.log('FILE WRITTEN!');
          })
          .catch((err) => {
            console.log(err.message);
          });
      });

  }
  onScan()
  {
    this.props.navigator.push({title:TITLE_NAME,Page:Scanner,coin: COIN_NAME});
  }


  onCopyFromClipboard()
  {
    Clipboard.getString().then((content) => {
      this.props.navigator.push({Page:Sender,data : content ,coin:COIN_NAME,popNum:1});
    });
  }


  onReceiveMoney()
  {
    this.props.navigator.push({Page:Receiver,myAddress:myaddress});
  }

  getBitcoinAddress()
  {
    const keypair = Bitcoin.ECPair.makeRandom();
    console.log(keypair.getAddress());
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
              <Button raised primary upperCase={false} text="Pay address from clipboard" style={raisedButton} onPress={()=>this.onCopyFromClipboard()}/>
            </View>

          </View>
          <View style={styles.rowContainer}>
            <View style={styles.clipbutton}>
              <Button raised primary upperCase={false} text="Receive Money" style={raisedButton} onPress={()=>this.onReceiveMoney()}/>
            </View>
          </View>
          <View style={{height:150}}/>

        </View>

      </View>
    );
  }
}

BitcoinWindow.propTypes = propTypes;

export default BitcoinWindow;
