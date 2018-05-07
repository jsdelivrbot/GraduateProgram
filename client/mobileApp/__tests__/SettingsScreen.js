import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../src/components/SettingsScreen';
import Adapter from 'enzyme-adapter-react-16';
import {Text} from "react-native";
import {configure, shallow} from "enzyme/build/index";

configure({ adapter: new Adapter() });

describe('SettingsScreen component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SettingsScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('render a text element', () => {
        const wrapper = shallow(
            <SettingsScreen />
        );

        /*const abc = wrapper.dive().instance();

        //console.log(wrapper.dive().debug());
        console.log(abc);

        expect(wrapper).toEqual('Events');
        expect(abc.find(FlatList)).toHave.length(1);*/

        //expect(wrapper.find(TableHeaderColumn).length === 5).toEqual(true);

        // expect(render.find('Text').length).toBe(3);

        //console.log(wrapper.debug());
        /*expect(wrapper.contains(<Text style={{fontSize: 20,
                textAlign: 'center',
                margin: 10}} accessible={true} allowFontScaling={true} ellipsizeMode="tail">
                Vacancies
            </Text>
        )).toEqual(true);*/

        //const render = wrapper.dive();

        expect(render.find('Text').length).toBe(1);
    });
});
