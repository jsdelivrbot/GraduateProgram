import {FETCH_EVENTS, FETCH_EVENTS_ERROR} from './types';
import axios from 'axios';

export const fetchEvents = () => dispatch =>{
    axios.get('https://graduates-mindera.herokuapp.com/events')
        .then((res) => dispatch({
            type: FETCH_EVENTS,
            payload: res.data
        }))
        .catch((error) => dispatch({
            type: FETCH_EVENTS_ERROR,
            payload: error
        }));
};