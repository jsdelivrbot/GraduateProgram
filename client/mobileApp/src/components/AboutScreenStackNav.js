import React from 'react';
import { StackNavigator } from 'react-navigation';
import AboutScreen from './AboutScreen';

/* Main navigation screens */
const AboutScreenStackNav = StackNavigator (
    {
        About: {
            screen: AboutScreen
        }
    },
    {
        initialRouteName: 'About'
    });

export default AboutScreenStackNav;
