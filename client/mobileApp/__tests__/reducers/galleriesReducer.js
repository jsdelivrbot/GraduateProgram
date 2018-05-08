import React from 'react';
import eventsReducer from '../../src/reducers/eventsReducer';
import {FETCH_GALLERY, FETCH_GALLERY_ERROR} from '../../src/actions/types';
import {fetchGallery} from "../../src/actions/galleriesActions";

describe('galleriesReducer', () => {
    it('FETCH_GALLERY', () => {
        expect(eventsReducer(undefined, fetchGallery(1))).toMatchSnapshot();
    });
    it('FETCH_GALLERY_ERROR', () => {
        const action = { type: FETCH_GALLERY_ERROR };
        expect(eventsReducer(undefined, action)).toMatchSnapshot();
    });
});
