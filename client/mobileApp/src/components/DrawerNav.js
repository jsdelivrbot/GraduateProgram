import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import AboutScreen from "./AboutScreen";

const DrawerNav = DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingsScreen
    },
    About: {
        screen: AboutScreen
    }
}, {
    //drawerBackgroundColor: 'orange',
    drawerPosition: left,
    drawerWidth: 200
    }
);

export default DrawerNav;