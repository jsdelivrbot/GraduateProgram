import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import EventsTab from '../../src/components/mochComponents/EventsTab';

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
});
