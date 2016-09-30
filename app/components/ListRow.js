import{
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';
import React, {Component} from 'react';

export default class ListRow extends Component{
	constructor(props){
		super(props);
	}
	_popup= ()=>{
		console.log(JSON.parse(this.props.RowData).url);	
	}

	render(){
		return(
				<View style={styles.view}>
					<Image
						style={styles.image}
						source={{	uri: JSON.parse(this.props.RowData).url}}
					/>
					<Text
						style={styles.text}
					> 
						{JSON.parse(this.props.RowData).ImageName}
					</Text>	
				</View>
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
		paddingLeft:5
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
