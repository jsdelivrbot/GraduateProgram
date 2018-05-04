import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import EventsTab from "./EventsTab";
import VacanciesTab from "./VacanciesTab";
import Icons from 'react-native-vector-icons/Ionicons';

/* Main navigation Tabs */
const TabNav = TabNavigator({
    Events: {
        screen: EventsTab

    },
    Vacancies: {
        screen: VacanciesTab
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
    navigationOptions: {
        title: "Meet Mindera",
        headerStyle: {
            backgroundColor: '#0145CD',
            elevation: 0, // Removes bottom shadow of the nav bar
            borderBottomWidth: 1,
            borderBottomColor: '#01308d',
        },
        headerTitleStyle: {
            color: '#ffffff'
        }
        /*headerLeft: (
            <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icons name="md-menu" size={30} color="#ffff" />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{paddingRight:20}} onPress={() => alert('search something')}>
                <Icons name="md-search" size={30} color="#ffff" />
            </TouchableOpacity>
        )*/
    }
});

export default TabNav;