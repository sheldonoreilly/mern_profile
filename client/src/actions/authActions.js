import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//registerUser takes in userData -> and also takes in the dispatch functio
//which it will call
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    //need to redirect here
    .then(res => history.push('/signin'))
    //if error sent from the api - dispatch it, they will be 'reduced'
    //and then made available to our components props using 'connect'
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//registerUser takes in userData -> and also takes in the dispatch function
//which it will call
export const logIn = userData => dispatch => {
  axios
    .post('api/users/login', userData)
    .then(response => {
      //store token to local storage
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      //set the token to auth header
      setAuthToken(token);
      //decode - getting current user
      const decoded = jwt_decode.decode(token);
      //dispatch current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
