import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import DayScreen from '../src/components/DayScreen';

configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
    data: [],
    loading: false,
    error: null
};

describe('DayScreen  component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <DayScreen />,
            { context: { store: mockStore(initialState) } },
            );
        expect(wrapper).toMatchSnapshot();
    });
});
