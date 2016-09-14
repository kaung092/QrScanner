import {
	ListView,
  AppRegistry,
	View,
	Text,
	StyleSheet,
} from 'react-native';
import React,{Component} from 'react';
import {Scene,Router} from 'react-native-router-flux';
import inventory from './app/containers/inventory';
import Scan from './app/containers/Scan';

class QrScanner extends Component {
	render(){
		return(
			<Router>
				<Scene key="root">
					<Scene key="inventory" component={inventory} title="Inventory"/>
					<Scene key="scan" component={Scan} title="Scan Code"/>
				</Scene>
			</Router>
		);	
	}

}

const styles = StyleSheet.create({
		text:{
			color:'red',
		},
		Scanner:{
			width: 100,
			height: 100
		}

	});

AppRegistry.registerComponent('QrScanner', () => QrScanner);
