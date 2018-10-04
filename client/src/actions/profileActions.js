import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from './types';

//get current profile -
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('api/profile')
    .then(response =>
      dispatch({
        type: GET_PROFILE,
        payload: response.data
      })
    )
    .catch(err => dispatch({ type: GET_ERRORS, payload: response.data }));
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
