import React, {Component} from 'react';
import {
	TextInput,
	View,
	Text,
	Image,
	StyleSheet
}
from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

export default class SaveImage extends Component{

	_SaveImage = ()=>{
		Actions.Inventory();	
	}

	render(){
		return(
			<View
				style={{flex:1}}
			>
				<TextInput 
					style = {styles.textbox}	
					onChangeText={(text)=> this.setState({ImageName:text})}
					value = {this.state.ImageName}
				/>
				<Image
					style =  {{width:100, height:100}}
					source = {{uri:this.props.url}}
				/>
				<Text>{this.props.url} </Text>  
				<Button 
					style= {{backgroundColor:'gray'}}
					onPress = {this._SaveImage}
				>
					Save This Image
				</Button>
			</View>
		);		
	}
	componentWillMount = ()=>{
		this.state = {
			ImageName: 'Enter Name',
		};	
	}
}


SaveImage.propTypes = {
	url: React.PropTypes.string
};

SaveImage.defaultProps = {
		url:'url not passed'
};

var styles = StyleSheet.create({
	textbox:{
		height: 100,
		borderColor:'gray',
		borderWidth: 2,
	}
});
