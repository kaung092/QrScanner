import React, {Component} from 'react';
import {
	TextInput,
	View,
	AsyncStorage,
	PickerIOS,
	Text,
	Image,
	StyleSheet
}
from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
var _ = require('lodash');
var SavedImagesKey = '@AsyncStorage:SavedImageKey';

export default class SaveImage extends Component{
	constructor(props){
		super(props);	
		this.state = {
			ImageName: 'Enter Name',
		};	
	}

	 _SaveImage = ()=>{
		let newEntry = { "ImageName":this.state.ImageName, "url": this.props.url};
		let storedImages = this.storedImages;
		console.log(storedImages);
		let alreadyExist = false;
	
		for(var i=0; i < storedImages.length; i++){
			if(storedImages[i].ImageName == newEntry.ImageName){
				console.log('already exist'+ storedImages[i].ImageName);	
				alreadyExist = true;
				storedImages[i] = newEntry;
			}	
		}
		if(!alreadyExist || storedImages.length ==0){
			storedImages.push(newEntry);	
		}
		try {
				AsyncStorage.setItem(SavedImagesKey, JSON.stringify(storedImages));
		} catch (error) {
			console.log(error);
		}
		Actions.Inventory();	
	}

	render(){
		return(
			<View
				style={{flex:1}}
			>

				<Image
					style =  {{width:100, height:100}}
					source = {{uri:this.props.url}}
				/>
				<TextInput 
					style = {styles.textbox}	
					onChangeText={(text)=> this.setState({ImageName:text})}
					value = {this.state.ImageName}
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
	componentWillMount = async ()=>{
		try{
			let storedimg = await AsyncStorage.getItem(SavedImagesKey);
			this.storedImages = JSON.parse(storedimg);
			if(this.storedImages == null){
				this.storedImages = [];	
			}
		}
		catch(err){
			this.storedImages = [];
		}
	}
}


SaveImage.propTypes = {
	url: React.PropTypes.string
};

SaveImage.defaultProps = {
		url:'https://i.imgur.com/eoCTi.png',
		storedImages:[]
};

var styles = StyleSheet.create({
	textbox:{
		height: 100,
		borderColor:'gray',
		borderWidth: 2,
	}
});
