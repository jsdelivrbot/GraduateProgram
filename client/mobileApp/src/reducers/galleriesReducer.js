import {FETCH_GALLERY} from '../actions/types'

const initialState = {
    data: [],
    loading: false,
    error: null,
    columns: 2
};

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_GALLERY:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
}