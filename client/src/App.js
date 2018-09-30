import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './App.css';

//components
import Navbar from './components/layout/Navbar';
import Center from './components/layout/Center';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#494b49',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#a2a2a2'
    },
    secondary: {
      main: '#11cb5f',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
    // error: will use the default color
  }
});

class App extends Component {
  render() {
    console.log(theme);
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar />
            <Route exact path="/" component={Center} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Footer />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

{
  /* <MuiThemeProvider theme={theme}>
            <Route exact path="/" Component={Center} />
            </MuiThemeProvider> */
}

export default App;
