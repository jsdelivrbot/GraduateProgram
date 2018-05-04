import {FETCH_DAY} from './types';
import axios from 'axios';

export const fetchDay = (id) => dispatch =>{
    axios.get('https://graduates-mindera.herokuapp.com/day/'+id)
        .then((res) => dispatch({
            type: FETCH_DAY,
            payload: res.data
        }))
        .catch((error) => dispatch({
            payload: error
        }));
};