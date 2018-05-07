import React from 'react';
import renderer from 'react-test-renderer';
import VacanciesTab from '../src/components/VacanciesTab';
import Adapter from 'enzyme-adapter-react-16';
import {Text} from "react-native";
import {configure, shallow} from "enzyme/build/index";

configure({ adapter: new Adapter() });

describe('VacanciesTab component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<VacanciesTab />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('render a text description', () => {
        const wrapper = shallow(
            <VacanciesTab />
        );

        expect(render.find('Text').length).toBe(1);
    });
});