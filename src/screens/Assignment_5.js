import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Btn = ({letter}) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textStyle}>{letter}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Assignment_5 = () => {
    return(
        <View style={styles.container}>
            <View style={styles.rowStyle}>
                <Btn letter='A'/>
                <Btn letter='B'/>
                <Btn letter='C'/>
            </View>
            <View style={styles.rowStyle}>
                <Btn letter='D'/>
                <Btn letter='E'/>
                <Btn letter='F'/>
            </View>
            <View style={styles.rowStyle}>
                <Btn letter='G'/>
                <Btn letter='H'/>
                <Btn letter='I'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'teal',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width: 70,
        height: 70,
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color: '#FFF',
    },
    rowStyle:{
        flexDirection: 'row'
    }
})

export default Assignment_5;