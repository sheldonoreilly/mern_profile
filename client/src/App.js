import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//jwt
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { logUserOut } from './actions/authActions';

//redux/react-redux
import { Provider } from 'react-redux';
import store from './store';

//private Routes
// import PrivateRoute from './components/common/PrivateRoute';
//components
import Navbar from './components/layout/Navbar';
import Center from './components/layout/Center';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Browse from './components/browse-profile/Browse';

//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  //decode tokken and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //dispatch
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.currentTime / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logUserOut());
    //clear the current profile
    store.clearCurrentProfile();
    //redirect to login
    window.location.href = '/login';
  }
}

//material-ui
// const theme = createMuiTheme({
// palette: {
//   primary: {
//     main: '#282c34',
//     contrastText: '#eae6d2'
//   },
//   secondary: {
//     light: green[300],
//     main: green[500],
//     dark: green[700]
//   },
//   background: {
//     paper: '#282c34', //the background
//     default: '#282c34' // everything else (maybe plain grid?)
//   }
// }
// });

const dark = createMuiTheme({
  typography: {
    fontFamily: ['Karma', 'serif']
  },
  palette: {
    background: {
      paper: '#282c34'
    },
    text: {
      primary: '#fff',
      secondary: '#000'
    }
  }
});
const light = createMuiTheme({
  typography: {
    fontFamily: ['Karma', 'serif']
  },
  palette: {
    background: {
      paper: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#000'
    }
  }
});

class App extends Component {
  state = {
    themeColor: light
  };

  setTheme = lightColor => {
    if (lightColor === true) {
      this.setState({
        themeColor: light
      });
    } else {
      this.setState({
        themeColor: dark
      });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MuiThemeProvider theme={this.state.themeColor}>
              <Navbar themeHandler={this.setTheme} />
              <Route exact path="/" component={Center} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={SignIn} />
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/createprofile" component={CreateProfile} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Route exact path="/addeducation" component={Education} />
              <Route exact path="/addexperience" component={Experience} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/browse" component={Browse} />
              <Footer />
            </MuiThemeProvider>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
