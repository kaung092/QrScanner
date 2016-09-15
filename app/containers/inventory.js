import {
	ListView,
	AppRegistry,
	View,
	Text,
	StyleSheet,
} from 'react-native';
import React,{Component} from 'react';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class inventory  extends Component {

 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
				'California Roll', 'Seafood', 'Naruto Roll'
      ])
    };
  }


	render() {
		return (
			<View>
			<ListView
				style={styles.listview}
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			<Button
				style = {styles.Button}
				onPress={Actions.scan}>
				Scan Code
			</Button>

			</View>
		);
	}

}

const styles = StyleSheet.create({
		listview:{
			marginTop:100	
		},
		text:{
			color:'red',
		},
		Button:{
			fontSize:15, 
			justifyContent: 'center',
			color:'white', 
			backgroundColor:'green',
			padding:10, 
			width:130,
			alignSelf: 'center',
			height:45, 
			overflow:'hidden', 
			borderRadius:4
		}

	});

