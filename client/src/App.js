import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
// import grey from '@material-ui/core/colors/grey';

//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#000'
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
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
