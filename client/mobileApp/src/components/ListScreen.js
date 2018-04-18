import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ListScreen extends Component {
    static navigationOptions = {
        title: "List"
    };

    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                <Button onPress={()=> this.props.navigation.navigate('Day')} title="Go about" />
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