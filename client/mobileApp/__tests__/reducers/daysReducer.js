import React from 'react';
import eventsReducer from '../../src/reducers/eventsReducer';
import {FETCH_DAY, FETCH_DAY_ERROR} from '../../src/actions/types';
import {fetchDay} from "../../src/actions/daysActions";

describe('daysReducer', () => {
    it('FETCH_DAY', () => {
        expect(eventsReducer(undefined, fetchDay(1))).toMatchSnapshot();
    });
    it('FETCH_DAY_ERROR', () => {
        const action = { type: FETCH_DAY_ERROR };
        expect(eventsReducer(undefined, action)).toMatchSnapshot();
    });
});
