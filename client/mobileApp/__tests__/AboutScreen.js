import React from 'react';
import renderer from 'react-test-renderer';
import AboutScreen from '../src/components/AboutScreen';

describe('AboutScreen component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AboutScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});