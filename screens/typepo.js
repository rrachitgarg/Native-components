import React, {useState,useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, FlatList} from 'react-native';

export default function PO({navigation}){

    const [choices,setChoices] = useState(
        [
            {'text': 'Vendor with PO', 'key':'1'},
            {'text': 'Vendor without PO', 'key':'2'},
            {'text': 'ESTO', 'key':'3'},
            {'text': 'Pending dock assignments', 'key':'4'},
        ]
    )
    const chooseOnPress = (choice)=>{
        if(choice=='1'){
            return(navigation.navigate('ListVendors'));
        }
        alert("Coming soon");
    }


    return(
    <View style={styles.baseContainer}>
    <View>
    <Text style={{ alignSelf: 'center', fontSize: 23, marginBottom: 20}}>Select task you want to do</Text>
    </View>
        <FlatList
        numColumns={2}
        data ={choices}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.button} onPress={()=>chooseOnPress(item.key)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
        )}
        />

    </View>
    );
}

const styles = StyleSheet.create({
    baseContainer:{
        flex:1,
        paddingTop:40,
        paddingHorizontal: 20,
        backgroundColor: '#ffe9d4'
    },
    button: {
        borderRadius: 5,
        height: 50,
        flex:1,
        margin: 10,
        fontSize:15,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcd595'
    },
})