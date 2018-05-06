import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {StackNavigator} from "react-navigation";
import Icons from 'react-native-vector-icons/Ionicons';

/* Settings Screen */
class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings',
            headerStyle: {
                backgroundColor: '#0145CD'
            },
            headerTintColor: 'white',
            headerLeft: (
                <TouchableOpacity style={{paddingLeft:20}} onPress={() => navigation.navigate('Home')}>
                    <Icons name="md-arrow-back" size={25} color="#ffff" />
                </TouchableOpacity>
            )
        }
    };

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

const SettingsStackNav = StackNavigator (
    {
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        initialRouteName: 'Settings'
    });

export default SettingsStackNav;