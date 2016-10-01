import{
	View,
	TouchableHighlight,
	Text,
	StyleSheet,
	Image
} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

export default class ListRow extends Component{
	constructor(props){
		super(props);
	}
	_popup= ()=>{
		console.log(JSON.parse(this.props.RowData).url);	
	}
	_ViewImage = ()=>{
		Actions.ViewImage({
			url:JSON.parse(this.props.RowData).url,
			name:JSON.parse(this.props.RowData).ImageName
		})
	}

	render(){
		return(
				<TouchableHighlight 
					style={styles.view} 
					onPress={this._ViewImage}
				>
					<Text
						style={styles.text}
					> 
						{JSON.parse(this.props.RowData).ImageName}
					</Text>	
				</TouchableHighlight>
		)	
		
	}
	componentWillMount = ()=>{
	}

}


ListRow.defaultProps = {
		
};

const styles = StyleSheet.create({
	view:{
		marginTop:10,
		flex:1,
		flexDirection:'row',
		borderRadius:5,
		backgroundColor:'white',
		borderBottomWidth:1,
		borderColor:'gray',
		padding:5
	},
	image:{
		width:50,
		height:50,
		borderRadius:5
	},
	text:{
		marginLeft:10
	}
});
