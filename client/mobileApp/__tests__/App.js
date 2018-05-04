import 'react-native';
import React from 'react';
import EventsTab from '../src/components/EventsTab';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <EventsTab />
  );
});
