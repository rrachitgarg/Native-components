import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList, Button} from 'react-native';

export default function TruckDetails({navigation}){


    const vendor = navigation.getParam('vendor');
    const po = navigation.getParam('po');

    const [truck,setTruck] = useState([
        { 'id':1,'text':''}
    ]);

    const handleOnPress = ()=>{
        let l = truck.length;
        setTruck(arr=>[...arr,{'id':l+1,'text': ''}]);
    }

    const handleOnChange = (id,value)=>{
        setTruck(arr=>{
            arr[id-1].text = value;
            return arr;
        })
    }

    const flag = ()=>{
        if(truck.length>1)
        {
            return true;
        }
        return false;
    }

    const handleDelete= ()=>{
        setTruck((arr)=>{
            return arr.filter((item)=>item.id!=arr.length)
        })
    }

    const getPlaceHolder = (id)=>{
        return "Enter "+id+" truck info"
    }

    const handleOnSubmit=()=>{
        if(!truck[truck.length-1].text)
        {
            alert('Empty field error');
            return;
        }
        return (navigation.navigate("InvoiceDetails",{vendor:vendor,po:po,truckDetails:truck}));
    }

    return(
        <View style={styles.container}>
        <Text style={{fontSize:25,margin:10,fontWeight:'bold',paddingBottom:10,borderBottomWidth:1}}>PO Number: {po.poNo}</Text>
        <Text style={styles.textheading}>Enter truck details</Text>
        <View style={styles.addfield}>
            <TouchableOpacity style={styles.button} onPress={()=>handleOnPress()}>
            <Text>Add truck</Text>
            </TouchableOpacity>
        </View>
        <FlatList
        data ={truck}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <TextInput style={styles.textbox} placeholder={getPlaceHolder(item.id)} onChangeText={(val)=>handleOnChange(item.id, val)}/>
        )}
        />
        {flag() && <Button title="Delete truck" onPress={()=>handleDelete()}/>}
        <Text></Text>
        <Button title="Enter & Proceed" onPress={handleOnSubmit}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        backgroundColor: '#ffe9d4'
    },
    textheading:{
        marginTop: 15,
        paddingBottom:20,
        borderBottomWidth:1,
        alignSelf: 'center',
        fontSize: 30,
    },
    addfield: {
        flexDirection: 'row',
        justifyContent:'center',
    },
    button:{
        flex:0.5,
        marginTop:20,
        marginBottom:20,
        justifyContent:'center',
        alignItems: 'center',
        height: 60,
        borderWidth:1,
        backgroundColor:'#73d4fa',
        borderRadius:5,
    },
    textbox:{
        height: 40,
        fontSize: 15,
        borderWidth:1,
        borderRadius:5,
        margin:10
    },
})