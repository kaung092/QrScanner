import React, {Component} from 'react';
import {
	TextInput,
	View,
	AsyncStorage,
	PickerIOS,
	Text,
	Image,
	StyleSheet,
	WebView
}
from 'react-native';


export default class ViewImage extends Component{
	constructor(props){
		super(props);	
		this.state = {
			scalesPageToFit:false,
		};	
	}

	render(){
		return(
			<View
				style={styles.view}
			>	
				<Text>{this.props.name}</Text>
				<View style={styles.webViewWrapper}>
					<WebView
						scalesPageToFit= {this.state.scalesPageToFit}
						onLoad = {()=>{this.setState({scalesPageToFit:true})}}
						startInLoadingState={true}
						source ={{uri:this.props.url}}  
					/>
				</View>
			</View>
		);		
	}
	componentWillMount = async ()=>{
	}
}


ViewImage.propTypes = {
	url: React.PropTypes.string
};
ViewImage.defaultProps = {
		url:'https://i.imgur.com/eoCTi.png',
		name:''
};

var styles = StyleSheet.create({
	view:{
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		padding:5
	},
	webViewWrapper:{
		marginTop:10,
		width:300,
		height:350
	},

});
