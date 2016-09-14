/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import { Button } from 'react-native-material-design';
var QRCodeScreen = require('./QRCodeScreen');

import {
  AppRegistry,
  StyleSheet,
  Text,
	ListView,
	TouchableOpacity,
	NavigatorIOS,
  View
} from 'react-native';

class QrScanner extends Component {
	_scanPressed(){
		console.log('Scan is pressed');
	}
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!=r2});
		this.state = {
			dataSource: ds.cloneWithRows(['california roll','sushi row'])
		};
	}
	
  render() {
    return (
      <View style={styles.container}>
				<Button text="Scan New" theme="light" primary="googleGreen" onPress={()=>this._scanPressed()}></Button>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData)=><Text>{rowData}</Text>}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('QrScanner', () => QrScanner);
