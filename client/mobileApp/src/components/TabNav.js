import React from 'react';
import { TabNavigator } from 'react-navigation';
import EventsScreen from "./EventsScreen";
import VacanciesScreen from "./VacanciesScreen";

const TabNav = TabNavigator({
    Events: {
        screen: EventsScreen
    },
    Vacancies: {
        screen: VacanciesScreen
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: '#788691'
        },
        indicatorStyle: {
            backgroundColor: 'white'
        },
    }
});

export default TabNav;