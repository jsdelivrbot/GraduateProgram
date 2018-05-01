import React from 'react';
import { StackNavigator } from 'react-navigation';
import GalleryScreen from './GalleryScreen';
import DayScreen from './DayScreen';
import TabNav from './TabNav';

const StackNav = StackNavigator (
    {
        Home: {
            screen: TabNav
        },
        Gallery: {
            screen: GalleryScreen
        },
        Day: {
            screen: DayScreen
        }
        },
    {
        initialRouteName: 'Home'
    });

export default StackNav;
