import React from 'react';
import renderer from 'react-test-renderer';
import VacanciesTab from '../src/components/VacanciesTab';

describe('VacanciesTab component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<VacanciesTab />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});