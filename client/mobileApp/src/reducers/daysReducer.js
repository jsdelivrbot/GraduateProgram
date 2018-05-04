import {FETCH_DAY} from '../actions/types'

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_DAY:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
}