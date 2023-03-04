import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Assignment_2 = () => {
const pLanguages = [
    {lang: 'C'},
    {lang: 'C++'},
    {lang: 'Java'},
    {lang: 'JavaScript'},
    {lang: 'Go'},
    {lang: 'Kotlin'},
    {lang: 'Swift'},
    {lang: 'C#'},
    {lang: 'PHP'},
    {lang: 'Python'},
    {lang: 'Ruby'},
    {lang: 'R'},
    {lang: 'Objective-C'},
    {lang: 'TypeScript'},
    {lang: 'VB.'},
]
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <FlatList
                keyExtractor={pLanguage => pLanguage.lang}
                data={pLanguages}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.listStyle}>{item.lang}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listStyle:{
        width: 300,
        height: 80,
        marginTop: 10,
        paddingLeft: 20, 
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#ffbf00',
        backgroundColor: '#ffbf00',
        textAlignVertical: 'center',
        marginHorizontal: 20,        
    }
})

export default Assignment_2;