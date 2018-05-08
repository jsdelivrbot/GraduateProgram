import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import EventCardList from '../../src/components/EventCardList';

configure({ adapter: new Adapter() });

describe('EventCardList component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<EventCardList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});