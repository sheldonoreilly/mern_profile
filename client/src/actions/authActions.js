import axios from 'axios';
import { GET_ERRORS } from './types';

//registerUser takes in userData -> which takes in dispatch
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    //need to redirect here
    .then(res => history.push('/signin'))
    //if error sent from the api - dispatch it, they will be 'reduced'
    //and then made available to our components props using 'connect'
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
