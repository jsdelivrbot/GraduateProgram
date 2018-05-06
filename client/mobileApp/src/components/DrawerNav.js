import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, FlatList, View, Image, Text, StyleSheet } from 'react-native';
import StackNav from "./StackNav";
import SettingsScreenStackNav from "./SettingsScreenStackNav";
import AboutScreenStackNav from "./AboutScreenStackNav";
import {Dimensions} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';

/* Drawer content, with header included */
const DrawerContentComponent = (props) => (
    <ScrollView>
        <View style={styles.container}>
            <Image
                source={require('../static/img/glasses.png')}
                style={styles.banner}
            />
            <Text style={styles.user}>Manuel Gomes</Text>
        </View>
        <View>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

/* Left Drawer Navigation */
const DrawerNav = DrawerNavigator({
    Home: {
        screen: StackNav
    },
    Settings: {
        screen: SettingsScreenStackNav,
        navigationOptions: {
            title: 'Settings',
            drawerIcon: ({tintColor}) => (
                <Icons name="md-settings" size={25} tintColor="tintColor" />
            )
        }
    },
    About: {
        screen: AboutScreenStackNav,
        navigationOptions: {
            title: 'About',
            drawerIcon: ({tintColor}) => (
                <Icons name="md-help-circle" size={25} tintColor="tintColor" />
            )
        }
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width / 1.5,
    contentOptions: {
        activeTintColor: '#494949',
        inactiveTintColor:  '#494949'
    },
    contentComponent: DrawerContentComponent
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        backgroundColor: '#0145CD',
    },
    user: {
        color: 'white', marginTop: 20
    }
});

export default DrawerNav;