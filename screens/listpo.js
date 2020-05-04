import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList} from 'react-native';
import { Card } from 'react-native-elements';

export default function ListPo({navigation}){

      const polist = [
        {
            "key":"1",
            "poNo":"12345",
            "sDate":"5/5/2020",
            "eDate":"10/5/2020"
        },
        {
            "key":"2",
            "poNo":"12245",
            "sDate":"5/6/2020",
            "eDate":"10/6/2020"
        },
        {
            "key":"3",
            "poNo":"11245",
            "sDate":"10/6/2020",
            "eDate":"30/6/2020"
        }
    ]

    const vendor = navigation.getParam('vendor');

    const [choices,setChoices] = useState(polist);
    const handleOnChange = (query)=>{

    if(query=='')
    {
        setChoices(polist);
        return;
    }
    const pos = polist.filter(po => po.poNo.toLowerCase().startsWith(query.toLowerCase()));

    if(pos.length==0)
    {
        setChoices();
        return;
    }
    setChoices(pos);
    }

    const getTitle= (po)=>{
        const title = "PO Number: " + po;
        return title;
    }


    return(
        <View style={styles.container}>
            <TextInput style={styles.textbox} placeholder="Search by PO number"
            onChangeText={(value)=>handleOnChange(value)} autoFocus
            keyboardType="numeric"
            />
            <FlatList
                data={choices}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("TruckDetails",{vendor:vendor,po:item})}>
                    <Card title={getTitle(item.poNo)} style={{borderRadius:20}}>
                        <Text style={styles.paragraph}>
                            Vendor: {vendor}
                            {'\n'}
                            Date of supply: {item.sDate}
                        </Text>
                        </Card>
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
        backgroundColor: '#ffe9d4'
    },
    textbox:{
        height: 40,
        fontSize: 15,
        borderWidth:1,
        borderRadius:5,
        margin:10
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        margin:20,
        borderRadius:20,
        backgroundColor: '#f0a062',
      },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },
})