import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './TabNav';
import { Icon } from 'native-base';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: "Meet Mindera",
        headerLeft: <Icon name={search}/>,
        //headerRight: <Icon name={search}/>
    };

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