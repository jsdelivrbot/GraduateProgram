import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GalleryScreen from '../../src/components/GalleryScreen';

configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);

const initialState = {
    gallery: {
        data: [],
        loading: false,
        error: null
    }
};

describe('GalleryScreen  component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <GalleryScreen />,
            { context: { store: mockStore(initialState) } },
        );
        expect(wrapper).toMatchSnapshot();
    });
});
