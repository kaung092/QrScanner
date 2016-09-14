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
				'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }


	render() {
		return (
			<View>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			<Button
				onPress={Actions.scan}
			>
				Scan Code
			</Button>

			</View>
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

