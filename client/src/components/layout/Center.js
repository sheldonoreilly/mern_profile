import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  layout: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  },
  imageLayout: {
    maxWidth: '100%',
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
});

const Center = props => {
  const { classes } = props;
  return (
    <Typography className={classes.imageLayout} variant="title" color="inherit">
      <img src={'images/layout.jpg'} alt={'tile.title'} />
    </Typography>
  );
};
Center.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Center);
