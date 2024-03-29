import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Assignment1')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Assignment 1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('Assignment2')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Assignment 2</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Assignment3')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Assignment 3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Assignment4')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Assignment 4</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Assignment5')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Assignment 5</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        width: 250,
        height: 50,
        marginTop: 20,
        backgroundColor: '#0096FF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle:{
        color: '#fff'
    }
})

export default Home;