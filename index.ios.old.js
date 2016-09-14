import {
  AppRegistry,
	View,
	Text,
	StyleSheet
} from 'react-native';
import React,{Component} from 'react';
import BarcodeScanner from 'react-native-barcodescanner';

class QrScanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      torchMode: 'off',
      cameraType: 'back',
    };
  }

  barcodeReceived(e) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }

  render() {
    return (
			<View>
			<Text style={styles.text}>Qr Scanner App</Text>
			<Text>Qr Scanner App</Text>
			<Text>Qr Scanner App</Text>
      <BarcodeScanner
        onBarCodeRead={this.barcodeReceived}
        style={styles.Scanner}
        torchMode={this.state.torchMode}
        cameraType={this.state.cameraType}
				viewFinderBorderWidth={10}
				viewFinderBorderHeight={10}
      />
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

AppRegistry.registerComponent('QrScanner', () => QrScanner);
