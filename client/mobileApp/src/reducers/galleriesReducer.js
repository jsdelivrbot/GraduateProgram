import {FETCH_GALLERY, FETCH_GALLERY_ERROR} from '../actions/types'

const initialState = {
    data: [],
    loading: false,
    error: null,
    columns: 2
};

export default function(state=initialState, action){
    state.loading = true;


    switch(action.type){
        case FETCH_GALLERY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_GALLERY_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
}