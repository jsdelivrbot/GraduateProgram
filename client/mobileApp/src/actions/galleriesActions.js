import {FETCH_GALLERY} from './types';
import axios from 'axios';

export const fetchGallery = (id) => dispatch =>{
    axios.get('https://graduates-mindera.herokuapp.com/gallery/'+id)
        .then((res) => dispatch({
            type: FETCH_GALLERY,
            payload: res.data
        }))
        .catch((error) => dispatch({
            payload: error
        }));
};