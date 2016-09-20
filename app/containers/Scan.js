'use strict';

import React,{Component} from 'react';
import Camera from 'react-native-camera';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VibrationIOS,
}	from 'react-native';

export default class Scan extends Component{ 

   _onPressCancel = ()=> {
    var $this = this;

		console.log('BarCode cancel pressed.  Flag: '+this.barCodeFlag);

    requestAnimationFrame(function() {
      $this.props.navigator.pop();
      if ($this.props.onCancel) {
        $this.props.onCancel();
      }
    });
  }

  _onBarCodeRead = (result)=> {
    var $this = this;
		console.log('BarCode detected flag: '+this.barCodeFlag);

    if(this.barCodeFlag == true) {
      this.barCodeFlag = false;
			console.log('Inside if loop.  flag: '+this.barCodeFlag);

      setTimeout(()=>{
        VibrationIOS.vibrate();
				console.log("result data: "+result.data);
				console.log("result type: "+result.type);
//				Actions.inventory();
				Actions.SaveImage({url:result.data});
//        $this.props.navigator.pop();
//        $this.props.onSucess(result.data);
      }, 1000);
    }
  }

	render(){
    var cancelButton = null;
    this.barCodeFlag = true;

    if (this.props.cancelButtonVisible) {
      cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;
    }

    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        {cancelButton}
      </Camera>
    );
  }
}

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
});


Scan.propTypes = {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
}
Scan.DefaultProps = {
      cancelButtonVisible: false,
      cancelButtonTitle: 'Cancel',
}


var styles = StyleSheet.create({

  camera: {
    height: 568,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});


