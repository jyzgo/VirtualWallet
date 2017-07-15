import { Clipboard, View, StyleSheet,Alert } from 'react-native';
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
  coin: PropTypes.object.isRequired,
};

class CoinWindow extends Component {
  constructor (props)
  {
    super(props);
    console.log(' coin type = '+ this.props.coin.name);
    this.fileName = RNFS. DocumentDirectoryPath + "/" + this.props.coin.file;
    console.log('file name ' + this.fileName);
    this.CheckPRExist();
    this.wifKey="";
    this.address ="";

  }

  CheckPRExist()
  {
    RNFS.exists(this.fileName).then((isExists)=>{
        if(isExists) {
         RNFS.readFile(this.fileName).then((content)=>{
            this.wifKey = content;
            var key = Bitcoin.ECPair.fromWIF(content);
            this.address = key.getAddress();
         })
        }else
        {
          this.AlertCreate();
        }
      }
    );
  }
  AlertCreate()
  {
    Alert.alert(
      'Create A ' + this.props.coin.name +' Pair',
      'No valid '+ this.props.coin.name + ' wallet,we will create one for you.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    var keypair = Bitcoin.ECPair.makeRandom();
    var wifKey = keypair.toWIF();
    this.wifKey = wifKey;
    this.address = keypair.getAddress();
    this.WriteFile(wifKey);
  }

  WriteFile(wifKey)
  {
    console.log('wif '+wifKey);
    RNFS.writeFile(this.fileName, wifKey, 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  onScan()
  {
    this.props.navigator.push({Page:Scanner,coin:this.props.coin,wif:this.wifKey});
  }


  onCopyFromClipboard()
  {
    Clipboard.getString().then((content) => {
      this.props.navigator.push({Page:Sender,data : content ,coin:this.props.coin,popNum:1});
    });
  }


  onReceiveMoney()
  {
    this.props.navigator.push({Page:Receiver,myAddress:this.address});
  }


  render() {
    return (
      <View style={styles.container}>
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

CoinWindow.propTypes = propTypes;

export default CoinWindow;
