import {FETCH_GALLERY, FETCH_GALLERY_ERROR} from './types';
import axios from 'axios';

export const fetchGallery = (id) => dispatch =>{
    axios.get('https://graduates-mindera.herokuapp.com/gallery/'+id)
        .then((res) => dispatch({
            type: FETCH_GALLERY,
            payload: res.data
        }))
        .catch((error) => dispatch({
            type: FETCH_GALLERY_ERROR,
            payload: error
        }));
};