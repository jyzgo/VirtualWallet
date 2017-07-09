
import {StyleSheet,View,Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';
import {  Toolbar ,Button} from '../react-native-material-ui';
const propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const raisedButton={
		container:{height:50}

	};

class Sender extends Component {

  constructor (props)
  {
    super(props);
  }

  onTransfer()
  {
    console.log('transfer');
  }

  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigator.pop()}
          centerElement={this.props.route.coin + ' sender'}
        />

        <View style={styles.vcontainer}>

          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button raised primary upperCase={false} text="Confirm Transfer" style={raisedButton}  onPress={()=>this.onTransfer()} />
            </View>
          </View>
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
Sender.propTypes = propTypes;
export default Sender;
