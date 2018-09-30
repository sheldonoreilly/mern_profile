import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  layout: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <Typography className={classes.layout} variant="title" color="inherit">
      Copyright &copy;
    </Typography>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
