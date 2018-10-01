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

//material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8e0038'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MuiThemeProvider theme={theme}>
              <Navbar />
              <Route exact path="/" component={Center} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/signIn" component={SignIn} />
              <Footer />
            </MuiThemeProvider>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
