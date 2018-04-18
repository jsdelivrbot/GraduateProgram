import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import DayScreen from './DayScreen';

const StackNav = StackNavigator (
    {
        Home: {
            screen: HomeScreen
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
