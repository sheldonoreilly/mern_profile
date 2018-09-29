import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  //   root: {
  //     flexGrow: 1
  //   },
  //   grow: {
  //     flexGrow: 1
  //   },
  //   menuButton: {
  //     marginLeft: -12,
  //     marginRight: 20
  //   }
  layout: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    // <Paper elevation={5}>
    <Typography className={classes.layout} variant="title" color="inherit">
      Footer
    </Typography>
    // </Paper>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
