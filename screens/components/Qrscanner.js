import React, {useState,useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';


const QrScanner= ({navigation})=>{

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(null);

    useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
    alert(data);
    navigation.goBack();
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );

}

export default QrScanner;