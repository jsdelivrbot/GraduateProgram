import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DayScreen extends Component {
    static navigationOptions = {
        title: "Open Day"
    };

    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <Text>
                    Day
                </Text>
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