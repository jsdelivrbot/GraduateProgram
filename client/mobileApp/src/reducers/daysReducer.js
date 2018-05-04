import {FETCH_DAY, FETCH_DAY_ERROR} from '../actions/types'

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function(state=initialState, action){
    state.loading = true;

    switch(action.type){
        case FETCH_DAY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_DAY_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
}