import { GET_ERRORS } from '../actions/types';

const initialState = {};

//pure function - no mutations
export default function(state = initialState, action) {
  switch (action.type) {
    //with error we are simply forwarding on the errors
    //so they may be available to the components
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
