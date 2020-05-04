import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList} from 'react-native';

export default function ListVendor({navigation}){

      const vendorslist = [
        {'text':'Hindustan Unilever Pvt Ltd','key':'1'},
        {'text':'Nestle Pvt Ltd','key':'2'},
        {'text':'Vendor 3','key':'3'},
        {'text':'Vendor 4','key':'4'},
        {'text':'Vendor 5','key':'5'},
        {'text':'Vendor 6','key':'6'},
    ]

    const [choices,setChoices] = useState(vendorslist);
    const handleOnChange = (query)=>{
    const regex = new RegExp(`${query.trim()}`, 'i');
    const vendors = vendorslist.filter(vendor => vendor.text.search(regex) >= 0);
    if(vendors.length==0)
    {
        setChoices([{"text":"No vendors found","key":"0"}])
        return;
    }
    setChoices(vendors);
    }

    const handleOnPress = (vendor)=>{
        if(vendor.key!=0)
        {
            navigation.navigate("ListPos",{vendor: vendor.text});
            return;
        }
    }


    return(
        <View style={styles.container}>
            <TextInput style={styles.textbox} placeholder="Search by vendor name" onChangeText={(value)=>handleOnChange(value)}/>
            <FlatList
                data={choices}
                renderItem={({item})=>(
                <TouchableOpacity style={styles.button} onPress={
                    ()=>handleOnPress(item)}>
                <Text>{item.text}</Text>
                </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
    },
    textbox:{
        height: 40,
        fontSize: 15,
        borderWidth:1,
        borderRadius:5,
        margin:10
    },
    button: {
        borderRadius: 5,
        height: 50,
        flex:1,
        margin: 10,
        padding: 10,
        fontSize:15,
        borderWidth:1,
        alignItems: 'center',
        backgroundColor: '#f0a062'
    },
})