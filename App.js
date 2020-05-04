import React, {useState,useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import logo from './assets/logo.webp';
import QrScanner from './screens/components/Qrscanner';
import Navigator from './routes/homeStack';

export default function App() {
  return(
    <Navigator/>
  );
}