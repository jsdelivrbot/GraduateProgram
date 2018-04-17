import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';

const StackNav = StackNavigator ({
    Main: {
        screen: MainScreen
    }
});

export default StackNav;
