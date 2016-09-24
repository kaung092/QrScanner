import {
	ListView,
	AppRegistry,
	AsyncStorage,
	View,
	Text,
	StyleSheet,
} from 'react-native';
import React,{Component} from 'react';
import Button from 'react-native-button';
import { Actions , ActionConst} from 'react-native-router-flux';
import ListRow from '../components/ListRow';

var SavedImagesKey = '@AsyncStorage:SavedImageKey';  

export default class inventory  extends Component {
	async componentDidMount(){
		try {
			let value = await AsyncStorage.getItem(SavedImagesKey);
			value = JSON.parse(value);
			console.log(value.length);
			let arr = value.map((obj)=>JSON.stringify(obj));
			console.log(arr[0]);
			console.log(JSON.parse(arr[0]));
			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			
			if (value !== null){
				this.setState({
					dataSource: ds.cloneWithRows( 
						value.map((obj)=>JSON.stringify(obj))
					)
				});
			}
		} catch (error) {
			console.log(error);
			// Error retrieving data
		}
	}
	
 constructor(props) {
    super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state={
			dataSource: ds.cloneWithRows(['{}']),
		};

  }
	
	_ScanNew(){
		Actions.Scan();
//			Actions.SaveImage({url:'data:image/png;base64,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'});
	}

	render() {
		return (
			<View>
			<ListView
				style={styles.listview}
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <ListRow RowData = {rowData} />}
			/>
			<Text>{this.state.selected}</Text>
			<Button
				style = {styles.Button}
				onPress={
					this._ScanNew
				}
			>
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

