import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, List, ListItem, Header, Button, Icon /* All native-base components used in this file */ } from 'native-base';

export default class MainScreen extends Component {

    static navigationOptions = {
        title: "Meet Mindera",
        //headerLeft: <Icon name={menu}/>,
        headerRight: <Icon name={search}/>
    };

    render(){
        return (
            <View style = {styles.container}>
                <Text>MainScreen</Text>
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