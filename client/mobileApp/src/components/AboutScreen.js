import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, WebView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

/* About Screen */
export default class AboutScreen extends Component {

    render(){
        return (
            <WebView

                source={{uri: 'https://github.com/facebook/react-native'}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        marginBottom: 40
    }
});