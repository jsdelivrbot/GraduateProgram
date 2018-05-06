import React from 'react';
import renderer from 'react-test-renderer';
import EventCardList from '../src/components/EventCardList';

describe('EventCardList component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<EventCardList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});