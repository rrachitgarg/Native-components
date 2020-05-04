import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList} from 'react-native';
import Axios from 'axios'

export default function ListPo({navigation}){


    const data=[{
            "id": 1,
            "name": "Super Store Ahmedabad - Warehouse"
        },
        {
            "id": 2,
            "name": "Super Store Bangalore - Warehouse"
        },
        {
            "id": 3,
            "name": "Super Store Chennai - Warehouse"
        },
        {
            "id": 4,
            "name": "Delhi Large Warehouse"
        },
        {
            "id": 5,
            "name": "Super Store Delhi P1 - Warehouse"
        },
        {
            "id": 6,
            "name": "Delhi Warehouse Bulk Bamnoli"
        },
        {
            "id": 7,
            "name": "Super Store Gurgaon G1 - Warehouse"
        },
        {
            "id": 9,
            "name": "Super Store Gurgaon G3 - Warehouse"
        },
        {
            "id": 10,
            "name": "Super Store Gurgaon G4 - Warehouse"
        },
        {
            "id": 11,
            "name": "Super Store Hyderabad - Warehouse"
        },
        {
            "id": 12,
            "name": "Super Store Jaipur - Warehouse"
        },
        {
            "id": 13,
            "name": "Super Store Kolkata - Warehouse"
        },
        {
            "id": 14,
            "name": "(DO NOT USE) Lucknow"
        },
        {
            "id": 15,
            "name": "Super Store Lucknow - Warehouse"
        },
        {
            "id": 16,
            "name": "(DO NOT USE) Mumbai FNV warehouse"
        },
        {
            "id": 17,
            "name": "Super Store Mumbai - Warehouse"
        },
        {
            "id": 19,
            "name": "Super Store Noida N2 - Warehouse"
        },
        {
            "id": 20,
            "name": "Super Store Pune - Warehouse"
        },
        {
            "id": 21,
            "name": "Super Store Kolkata K2 - Warehouse"
        },
        {
            "id": 22,
            "name": "Super Store Faridabad - Warehouse"
        },
        {
            "id": 23,
            "name": "Super Store Bangalore B2 - Warehouse"
        },
        {
            "id": 24,
            "name": "Bulk NCR PL Warehouse"
        },
        {
            "id": 25,
            "name": "(DO NOT USE) Delhi FNV Warehouse"
        },
        {
            "id": 26,
            "name": "Super Store Kundli Warehouse"
        },
        {
            "id": 27,
            "name": "Super Store Kapashera Warehouse"
        },
        {
            "id": 28,
            "name": "Bulk Warehouse Bilaspur"
        },
        {
            "id": 29,
            "name": "Super Store Mumbai M4 - Warehouse"
        },
        {
            "id": 30,
            "name": "Super Store Hyderabad H2 - Warehouse"
        },
        {
            "id": 31,
            "name": "Super Store Chennai C2 - Warehouse"
        },
        {
            "id": 32,
            "name": "Super Store Dasna - Warehouse"
        },
        {
            "id": 33,
            "name": "Super Store Mumbai M2 - Warehouse"
        },
        {
            "id": 34,
            "name": "Super Store Gurgaon G4-B - Warehouse"
        },
        {
            "id": 35,
            "name": "Feeder Warehouse - Ahmedabad"
        },
        {
            "id": 36,
            "name": "Feeder Dankuni - Kolkata"
        },
        {
            "id": 37,
            "name": "Feeder Warehouse - Hyderabad"
        },
        {
            "id": 38,
            "name": "Super Store Mumbai M5 - Warehouse"
        },
        {
            "id": 39,
            "name": "Super Store Mumbai M2-B - Warehouse"
        },
        {
            "id": 40,
            "name": "Feeder Warehouse - Kundli"
        },
        {
            "id": 41,
            "name": "Feeder Warehouse - Lucknow"
        },
        {
            "id": 42,
            "name": "HOT Warehouse Bulk Mumbai M2"
        },
        {
            "id": 43,
            "name": "Bulk Hyderabad H2 - Warehouse"
        },
        {
            "id": 44,
            "name": "Super Store Guwahati - Warehouse"
        },
        {
            "id": 45,
            "name": "Super Store Indore - Warehouse"
        },
        {
            "id": 46,
            "name": "Super Store Chandigarh - Warehouse"
        },
        {
            "id": 47,
            "name": "Super Store Faridabad_2 - Warehouse"
        },
        {
            "id": 48,
            "name": "Not in Service Area"
        },
        {
            "id": 49,
            "name": "Super Store Dasna 2 - Warehouse"
        },
        {
            "id": 50,
            "name": "Super Store Bangalore B2 Bulk - Warehouse"
        },
        {
            "id": 51,
            "name": "Super Store Orange Something 2 - Warehouse"
        },
        {
            "id": 52,
            "name": "Sonepath P2"
        }
    ]


    const [warehouseList,setWh] = useState(data);
    const [choices,setChoices] = useState(data);

    // Function to check letters and numbers
    function alphanumeric(inputtxt)
    {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if((inputtxt.match(letterNumber)))
    {
    return true;
    }
    else
    {
    return false;
    }
    }


    const handleOnChange = (query)=>{
    if(query=='')
    {
        setChoices(warehouseList);
        return;
    }
    if(!alphanumeric(query)){
        setChoices([{"name":"No facility found","id":"0"}])
        return;
    }
    const regex = new RegExp(`${query.trim()}`, 'i');
    const whs = warehouseList.filter(wh => wh.name.search(regex) >= 0);
    if(whs.length==0)
    {
        setChoices([{"name":"No facility found","id":"0"}])
        return;
    }
    setChoices(whs);
    }

    const onPress = (id)=>{
        if(id!=0){
            return(navigation.navigate("TypePo"));
        }
    }


    return(
        <View style={styles.container}>
            <TextInput style={styles.textbox} placeholder="Search by facility name" onChangeText={(value)=>handleOnChange(value)}/>
            <FlatList
                data={choices}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                <TouchableOpacity style={styles.button} onPress={()=>onPress(item.id)}>
                <Text>{item.name}</Text>
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