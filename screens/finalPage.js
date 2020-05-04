import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList, Button} from 'react-native';

export default function InvoiceDetails({navigation}){

    const vendor = navigation.getParam('vendor');
    const po = navigation.getParam('po');
    const truckDetails = navigation.getParam('truckDetails')
    const invoiceDetails = navigation.getParam('invoices')

    return(
        <View style={styles.container}>
        <View>
        <Text style={{fontSize:25,margin:10,fontWeight:'bold',paddingBottom:20,borderBottomWidth:1}}>Details</Text>
        </View>
            <Text style={styles.text}>
            Vendor : {vendor}
            {'\n'}
            PO Number: {po.poNo}
            {'\n'}
            No of trucks: {truckDetails.length}
            {'\n'}
            No of invoices: {invoiceDetails.length}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        backgroundColor: '#ffe9d4'
    },
    text:
    {
        fontSize:15,margin:10,paddingBottom:10
    }
})