import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile } from '../../actions/profileActions';

const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  paperHeader: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    },
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // color: 'red',
    display: 'flex',
    flexDirection: 'column'
    // justifyContent: 'center'
  },
  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px'
    // marginBotton: '25px'
  }
});

const ProfileHeader = props => {
  const { classes, name, avatar } = props;
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Paper className={classes.paperHeader}>
          <Typography variant="display2" align="center" color="inherit">
            {name}
          </Typography>

          <img
            className={classes.gravtar}
            src={avatar}
            width="250"
            height="250"
          />

          {/* <form className={classes.form} /> */}
        </Paper>
      </div>
    </Fragment>
  );
};

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHeader);
