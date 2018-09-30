import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// import './App.css';

//components
import Navbar from './components/layout/Navbar';
import Center from './components/layout/Center';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// #8e0038
// #c34262 - light
// #5a0013 - dark

// fff - text

// secondary
// #009688
// 52c7b8 - l
// 00675b - d

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: purple[300],
      main: '#8e0038'
      // dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#8e0038',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//       contrastText: '#fff'
//     },
//     secondary: {
//       main: '#11cb5f',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00'
//     }
//     // error: will use the default color
//   }
// });

class App extends Component {
  render() {
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
export default App;
