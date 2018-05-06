import React from 'react';
import VacanciesTab from '../src/components/VacanciesTab';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <VacanciesTab />
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
