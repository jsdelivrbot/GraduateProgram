import React from 'react';
import { StackNavigator } from 'react-navigation';
import GalleryScreen from './GalleryScreen';
import DayScreen from './DayScreen';
import TabNav from './TabNav';

/* Main navigation screens */
const StackNav = StackNavigator (
    {
        Home: {
            screen: TabNav
        },
        Day: {
            screen: DayScreen
        },
        Gallery: {
            screen: GalleryScreen
        }
        },
    {
        initialRouteName: 'Home'
    });

export default StackNav;
