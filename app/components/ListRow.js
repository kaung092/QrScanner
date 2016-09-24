import{
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';
import React, {Component} from 'react';
import Button from 'react-native-button'; 

export default class ListRow extends Component{
	constructor(props){
		super(props);
	}
	_popup= ()=>{
		console.log(JSON.parse(this.props.RowData).url);	
		
	}

	render(){
		return(
				<View>
				<Button
					onPress={
						this._popup	
					}
				> 
					{JSON.parse(this.props.RowData).ImageName}
				</Button>	
				<Image
					style={{width: 50, height: 50}}
					source={{	uri: JSON.parse(this.props.RowData).url}}
				/>
				</View>
		)	
		
	}
	componentWillMount = ()=>{
	}

}


ListRow.defaultProps = {
};

const styles = StyleSheet.create({
	

});
