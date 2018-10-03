import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import green from '@material-ui/core/colors/green';

//redux/react-redux
import { Provider } from 'react-redux';
import store from './store';

//components
import Navbar from './components/layout/Navbar';
import Center from './components/layout/Center';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';

//material-ui
const theme = createMuiTheme({
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
});

class App extends Component {
  render() {
    console.log('theme :', theme);
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MuiThemeProvider theme={theme}>
              <Navbar />
              <Route exact path="/" component={Center} />
              <Route exact path="/register" component={Register} />
              {/* <Route exact path="/signIn" component={SignIn} /> */}
              <Route exact path="/signIn" component={Dashboard} />

              <Footer />
            </MuiThemeProvider>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
