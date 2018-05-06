import React from 'react';
import { StackNavigator } from 'react-navigation';
import SettingsScreen from './SettingsScreen';

/* Main navigation screens */
const SettingsScreenStackNav = StackNavigator (
    {
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        initialRouteName: 'Settings'
    });

export default SettingsScreenStackNav;
