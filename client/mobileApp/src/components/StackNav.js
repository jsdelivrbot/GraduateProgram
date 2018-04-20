import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ListScreen from './ListScreen';
import DayScreen from './DayScreen';
import TabNav from './TabNav';
import Icons from 'react-native-vector-icons/Ionicons';

const StackNav = StackNavigator (
    {
        Home: {
            screen: TabNav,
        },
        List: {
            screen: ListScreen
        },
        Day: {
            screen: DayScreen
        }
        },
    {
        initialRouteName: 'Home'
    });

export default StackNav;
