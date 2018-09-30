import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';

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
    return (
      <Fragment>
        <Paper style={styles.paperContainer} />
      </Fragment>
    );
  }
}
