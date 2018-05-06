import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../src/components/SettingsScreen';

describe('SettingsScreen component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SettingsScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});