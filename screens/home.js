import React, {useState,useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, Button} from 'react-native';
import logo from '../assets/logo.webp';
import QrScanner from './components/Qrscanner';

export default function App({navigation}) {

  const [qrText,setQrText] = useState("Scan Employee Passcode");
  const [userId,setUserId] = useState(null);
  const [scanner,setScanner]=useState(false);

  const toggle = ()=>{
    setScanner(c=>!c);
  }
  const handleUser = (val)=>{
    setQrText(val);
  }

  return (
    <View style={{flex:6}}>
    <View style={styles.container1}>
        <Image source={logo} style={styles.imgContainer} />
    </View>
        <Text style={{ alignSelf: 'center', fontSize: 23, marginTop: 40, marginBottom: 40}}>Access Details</Text>
    <View style={styles.container2}>
        <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text>{qrText}</Text>
        </TouchableOpacity>
        { scanner &&  <QrScanner handleUser = {handleUser} toggleScanner={toggle}/>}

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ListFacility")}>
            <Text>Select Facility</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 4,
  },
  imgContainer: {
    width: 75,
    height: 75,
    alignItems: 'center',
    marginBottom: 5
  },
  button: {
    backgroundColor: '#f2ece6',
    padding: 20,
    margin:20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f0873c'
  },
});