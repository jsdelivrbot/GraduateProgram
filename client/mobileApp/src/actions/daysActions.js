import {FETCH_DAY, FETCH_DAY_ERROR} from './types';
import axios from 'axios';

export const fetchDay = (id) => dispatch =>{
    axios.get('https://graduates-mindera.herokuapp.com/day/'+id)
        .then((res) => dispatch({
            type: FETCH_DAY,
            payload: res.data
        }))
        .catch((error) => dispatch({
            type: FETCH_DAY_ERROR,
            payload: error
        }));
};