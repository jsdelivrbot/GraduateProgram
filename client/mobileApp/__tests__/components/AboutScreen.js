import React from 'react';
import renderer from 'react-test-renderer';
import AboutScreen from '../../src/components/AboutScreen';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme/build/index";

configure({ adapter: new Adapter() });

describe('AboutScreen component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AboutScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders a header element', () => {
        const wrapper = shallow(
            <AboutScreen />
        );

        expect(wrapper.find('Styled(Header)').length).toBe(1);
    });
    it('renders a text element', () => {
        const wrapper = shallow(
            <AboutScreen />
        );

        expect(wrapper.find('Text').length).toBe(1);
    });
});