import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../../src/components/SettingsScreen';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme/build/index";

configure({ adapter: new Adapter() });

describe('SettingsScreen component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SettingsScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders a text element', () => {
        const wrapper = shallow(
            <SettingsScreen />
        );

        expect(wrapper.find('Text').length).toBe(1);
    });
});
