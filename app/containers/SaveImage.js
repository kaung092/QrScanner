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
			ImageName: '',
			warningTxt: ''
		};	
	}

	 _SaveImage = ()=>{
		if(this.state.ImageName == ''){
			this.setState({warningTxt : "Name Cannot be Empty"});	
			return;
		}
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
				style={styles.view}
			>
				<Image
					style ={styles.image}
					source = {{uri:this.props.url}}
				/>
				<Text style={{marginTop:10}}>Enter Name </Text>
				<TextInput 
					autoFocus
					style = {styles.textbox}	
					autoCorrect = {false}
					onChangeText={(text)=> this.setState({ImageName:text})}
					value = {this.state.ImageName}
				/>
				<Text style={{color:'red'}}>{this.state.warningTxt}</Text>
				<Button 
					style= {styles.button}
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
	view:{
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		padding:5
	},
	image:{
		width:200,
		height:200
	},
	textbox:{
		height: 30,
		width:300,
		alignSelf:'center',
		paddingLeft:10,
		borderRadius:5,
		borderColor:'gray',
		borderWidth: 2,
	},
	button:{
		marginTop:30,
		padding:10,
		borderRadius:10,
		height: 40,
		width: 200,
		backgroundColor:'green',
		color:'white'
	}
});
