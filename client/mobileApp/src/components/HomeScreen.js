import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import TabNav from './TabNav';
import Icons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Meet Mindera",
        headerStyle: {
            backgroundColor: '#788691',
            elevation: 0, // Removes bottom shadow of the nav bar
            borderBottomWidth: 1,
            borderBottomColor: '#67758b'
        },
        headerTitleStyle: {
            color: '#ffffff'
        },
        headerLeft: (
            <TouchableOpacity style={{padding: 20}} onPress={() => alert('search something')}>
                <Icons name="md-menu" size={30} color="#ffff" style={{paddingRight:15}} />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{padding: 20}} onPress={() => alert('search something')}>
                <Icons name="md-search" size={30} color="#ffff" style={{paddingRight:15}} />
            </TouchableOpacity>
        )
    };

    constructor(){
        super();
    }

    render(){
        return (
            <TabNav/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});