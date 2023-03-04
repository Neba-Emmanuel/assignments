import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Assignment_1 = () => {
const friends = [
    {
        id: 1,
        name: 'Chinu'
    },
    {name: 'Tony'},
    {name: 'Harvard'},
    {name: 'Stack'},
    {name: 'Captain'},
    {name: 'Rogers'},
    {name: 'Winter'},
    {name: 'Playback'},
]
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'grey', fontSize: 28}}>Map Function</Text>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item}) => {
                    const chinuID = item.id;
                    return(
                        <View>
                            <Text style={styles.listStyle}>Name is : {item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listStyle:{
        width: 250,
        height: 50,
        marginTop: 10,
        paddingLeft: 20,        
        color: '#0096FF',
        fontWeight: 'bold',
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0096FF',
        borderStyle: 'solid',
        textAlignVertical: 'center',
        
        // border: 'solid 1px blue'
    }
})

export default Assignment_1;