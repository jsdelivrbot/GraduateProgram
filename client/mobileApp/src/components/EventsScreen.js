import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import AboutScreen from './AboutScreen';
import StackNav from './StackNav';
import { StackNavigator } from 'react-navigation';

export default class EventsScreen extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <View>
                <Text>Events</Text>
                <Button onPress={()=> this.props.navigation.navigate('List')} title="Go about" />
            </View>
        );
    }
}