import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Settings Screen */
export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: "Settings"
    };

    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>This is settings screen</Text>
            </View>
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