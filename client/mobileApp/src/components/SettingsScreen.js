import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './TabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: "Settings"
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