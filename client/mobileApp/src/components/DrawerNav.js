import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StackNav from "./StackNav";
import SettingsScreen from "./SettingsScreen";
import AboutScreen from "./AboutScreen";
import {Dimensions} from "react-native";

/* Left Drawer Navigation */
const DrawerNav = DrawerNavigator({
    Home: {
        screen: StackNav
    },
    Settings: {
        screen: SettingsScreen
    },
    About: {
        screen: AboutScreen
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width / 1.5
    }
);

export default DrawerNav;