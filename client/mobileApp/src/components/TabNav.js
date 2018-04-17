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
});

export default TabNav;