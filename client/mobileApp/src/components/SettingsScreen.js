import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DayScreen from "./DayScreen";
import TabNav from "./TabNav";
import {StackNavigator} from "react-navigation";
import GalleryScreen from "./GalleryScreen";
import StackNav from "./StackNav";

/* Settings Screen */
class SettingsScreen extends Component {

    static navigationOptions = ({ navigation }) => {

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