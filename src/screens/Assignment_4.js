import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Assignment_4 = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={[styles.box,{backgroundColor: 'gold'}]}></View>
            <View style={[styles.box,{backgroundColor: 'purple'}]}></View>
            <View style={[styles.box,{backgroundColor: 'green'}]}></View>
            <View style={[styles.box,{backgroundColor: 'teal'}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        height: '100%',
        // height: 500,
        // flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box:{
        flex: 1,
        // width: 100,
        // height: 100,
    }
})

export default Assignment_4;