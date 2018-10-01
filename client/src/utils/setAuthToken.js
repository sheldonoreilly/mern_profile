import axios from 'axios';

const setAuthToken = token => {
  // will set on every request
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //remove
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
