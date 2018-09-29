import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import grey from '@material-ui/core/colors/grey';

//components
import Navbar from './components/layout/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: grey
  }
});

class App extends Component {
  render() {
    console.log(theme);
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
