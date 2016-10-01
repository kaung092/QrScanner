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
import ViewImage from './app/containers/ViewImage';

class QrScanner extends Component {
	render(){
		return(
			<Router>
				<Scene key="root">
					<Scene key="SaveImage" type="replace" component={SaveImage} title = "Save this Image"/>
					<Scene key="Inventory" component={Inventory} title="Inventory"/>
					<Scene key="Scan" component={Scan} title="Scan Code"/>
					<Scene key="ViewImage" component={ViewImage} />
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
