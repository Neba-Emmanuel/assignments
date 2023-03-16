import React, {useState} from "react";
import {View,StyleSheet,Text,FlatList, TouchableOpacity} from 'react-native';
const cities = [
    {id: 1, name: 'Mumbai'},
    {id: 2, name: 'New York'},
    {id: 3, name: 'Los Angeles'},
    {id: 4, name: 'Chicago'},
    {id: 5, name: 'Houston'},
    {id: 6, name: 'Phoenix'},
    {id: 7, name: 'Philadelphia'},
    {id: 8, name: 'London'},
    {id: 9, name: 'Birmingham'},
    {id: 10, name: 'Yaounde'},
    {id: 11, name: 'Douala'},
    {id: 12, name: 'Buea'},
    {id: 13, name: 'Kumba'},
]



const Assignment_3 = () => {
    const [show, setShow] = useState(true);
    
    //List to show
    const list = <FlatList
        keyExtractor={city => city.id}
        data={cities}
        renderItem={({item}) => {
        return (
            <View style={{flex: 1, alignItems: 'center', marginVertical: 5}}>
                <Text style={styles.listStyle}>{item.name}</Text>
            </View>
        )
        }}
    />
            
      
    return(
        <View style={{marginVertical: 10}}>
            <View style={{flexDirection: "row", justifyContent: 'space-around', marginBottom: 5}}>
                <TouchableOpacity style={styles.btnStyle} onPress={() => setShow(true)}>
                    <Text>Show</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={() => setShow(false)}>
                    <Text>Hide</Text>
                </TouchableOpacity>
            </View>
          {show ? <View>{list}</View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        width: 300,
        height: 50,
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#00008B',
        backgroundColor: '#00008B',
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 5,
        color: '#ffbf00', 
    },
    btnStyle:{
        backgroundColor: '#ffbf00',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 10,
        text: 'center'
    }
});

export default Assignment_3;