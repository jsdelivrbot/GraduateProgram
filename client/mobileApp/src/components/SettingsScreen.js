import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

/* Settings Screen */
export default class SettingsScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#01308d"
                    barStyle="light-content"
                />
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