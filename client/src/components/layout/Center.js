import React from 'react';

import Paper from '@material-ui/core/Paper';
// import Image from '../img/main.jpg'; // Import using relative path

const styles = {
  paperContainer: {
    height: '100vh',
    backgroundImage: `url(${'/images/layout.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};

export default class Center extends React.Component {
  render() {
    return <Paper style={styles.paperContainer} />;
  }
}
