import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import EventsTab from '../src/components/EventsTab';

configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
    data: [],
    loading: false,
    error: null
};

describe('EventsTab  component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <EventsTab />,
            { context: { store: mockStore(initialState) } },
        );
        expect(wrapper).toMatchSnapshot();
    });
});
