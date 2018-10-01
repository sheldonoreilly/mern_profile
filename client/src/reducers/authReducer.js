// import { GET_ERRORS } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

//pure function - no mutations
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
