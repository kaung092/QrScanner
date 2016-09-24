import {
	ListView,
  AppRegistry,
	View,
	Text,
	StyleSheet,
} from 'react-native';
import React,{Component} from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Inventory from './app/containers/Inventory';
import Scan from './app/containers/Scan';
import SaveImage from './app/containers/SaveImage';

class QrScanner extends Component {
	render(){
		return(
			<Router>
				<Scene key="root">
					<Scene key="SaveImage" type="replace" component={SaveImage} title = "Save this Image"/>
					<Scene key="Inventory" component={Inventory} title="Inventory"/>
					<Scene key="Scan" component={Scan} title="Scan Code"/>
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
