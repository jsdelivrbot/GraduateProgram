import React from 'react';
import eventsReducer from '../../src/reducers/eventsReducer';
import {FETCH_EVENTS, FETCH_EVENTS_ERROR} from '../../src/actions/types';
import {fetchEvents} from '../../src/actions/eventsActions'

describe('eventsReducer', () => {
    it('FETCH_EVENTS', () => {
        expect(eventsReducer(undefined, fetchEvents())).toMatchSnapshot();
    });
    it('FETCH_EVENTS_ERROR', () => {
        const action = { type: FETCH_EVENTS_ERROR };
        expect(eventsReducer(undefined, action)).toMatchSnapshot();
    });
});
