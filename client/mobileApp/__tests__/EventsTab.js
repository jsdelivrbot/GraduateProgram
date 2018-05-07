import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import EventsTab from '../src/components/mochComponents/EventsTab';

import { ScrollView, FlatList, View, Image, Text, StyleSheet,  ActivityIndicator, StatusBar } from 'react-native';

configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);

const initialState = {
    events: {
        data: [],
        loading: false,
        error: null
    }
};

describe('EventsTab  component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <EventsTab />,
            { context: { store: mockStore(initialState) } },
        );

        expect(wrapper.dive()).toMatchSnapshot();
    });
    /*it('componentWillMount: should set the passed initialCountValue to state', () => {
        const wrapper = shallow(
            <EventsTab />,
            { context: { store: mockStore(initialState) } },
        );
        expect(wrapper.prop('title')).toEqual('Events — Event Radar');
        expect(wrapper.state.data).toEqual(1);
    });*/
    /*it('render a document title and a parent title', () => {
        const wrapper = shallow(
            <EventsTab title="Events" parent="Event Radar" />,
            { context: { store: mockStore(initialState) } },
        );

        const abc = wrapper.dive().instance();

        //console.log(wrapper.dive().debug());
        console.log(abc);

        expect(wrapper).toEqual('Events');
        expect(abc.find(FlatList)).toHave.length(1);
    });*/
});
