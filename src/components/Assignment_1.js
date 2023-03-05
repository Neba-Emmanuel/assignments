import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Assignment_1 = () => {
const friends = [
    {
        id: 1,
        name: 'Chinu'
    },
    {
        id: 2,
        name: 'Tony'
    },
    {
        id: 3,
        name: 'Harvard'
    },
    {
        id: 4,
        name: 'Stack'
    },
    {
        id: 5,
        name: 'Captain'
    },
    {
        id: 6,
        name: 'Rogers'
    },
    {
        id: 7,
        name: 'Winter'
    },
    {
        id: 8,
        name: 'Playback'
    },
]

const ListFooter = () => {
    
    return <Text style={styles.listStyle}>Id is: 1</Text>

}
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'grey', fontSize: 28}}>Map Function</Text>
            <FlatList
                
                keyExtractor={friend => friend.id}
                data={friends}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.listStyle}>Name is : {item.name}</Text>
                        </View>
                    )
                }}
                ListFooterComponent={ListFooter}
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