import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import EventsTab from "./EventsTab";
import VacanciesTab from "./VacanciesTab";
import {Icon} from 'native-base';

/* Main navigation Tabs */
const TabNav = TabNavigator({
    Events: {
        screen: EventsTab,
        navigationOptions: {
            tabBarLabel: 'Events',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon name="home" style={{fontSize:25}} />
            )
        }
    },
    Vacancies: {
        screen: VacanciesTab,
        navigationOptions: {
            tabBarLabel: 'Vancancies',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon name="home" style={{fontSize:25}} />
            )
        }
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        upperCaseLabel: false,
        style: {
            backgroundColor: '#0145CD'
        },
        activeTintColor: "white",
        inactiveTintColor: "white",
        indicatorStyle: {
            backgroundColor: 'white'
        }
    },
    navigationOptions: ({ navigation }) =>({
        title: "Meet Mindera",
        headerStyle: {
            backgroundColor: '#0145CD',
            elevation: 0, // Removes bottom shadow of the nav bar
            borderBottomWidth: 1,
            borderBottomColor: '#01308d',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: (
            <TouchableOpacity style={{paddingLeft:20}} onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon name="menu" style={{fontSize:25, color:'white'}} />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{paddingRight:20}} onPress={() => alert('search something')}>
                <Icon name="search" style={{fontSize:25, color:'white'}} />
            </TouchableOpacity>
        )
    })
});

export default TabNav;