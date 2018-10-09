import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_PROFILE
} from './types';

//get current profile - will use database api to identify the logged in user
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
    //handle case: new user, no profile, so return an empty payload.
    .catch(err => {
      dispatch({ type: GET_PROFILE, payload: {} });
    });
};

//just a hook for a spinner component
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//clear the current profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const setProfile = profile => dispatch => {
  axios
    .post('/api/profile', profile)
    .then(response => {
      dispatch({
        type: SET_PROFILE,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// export const createprofile = (profileData, history) => dispatch => {
export const addEducation = (education, history) => dispatch => {
  axios
    .post('/api/profile/education', education)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addExperience = experience => dispatch => {
  axios
    .post('/api/profile/experience', experience)
    // .then(response => {
    //   //sor nothing is needed here i guess.
    //   //i am forwarding to dashboard in the component
    //   //so router not needed here?
    //   // dispatch({
    //   //   type: SET_PROFILE,
    //   //   payload: response.data
    //   // });

    //   // const wh
    // })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
