import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    color: theme.palette.common.white
    // display: 'flex',
    // flexDirection: 'column'
  },

  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px'
  }
});

const ProfileHead = props => {
  const { classes, profile, avatar } = props;
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="display2" color="inherit" align="center">
            {profile.user.name}
          </Typography>
          <img
            className={classes.gravtar}
            src={avatar}
            width="250"
            height="250"
            alt="alt"
          />
          <Typography variant="headline" align="center" color="inherit">
            {'Software Engineer'}
          </Typography>
          <Typography variant="subheading" align="center" color="inherit">
            {profile.location}
          </Typography>
        </div>
      </Paper>
      <Paper>
        <Typography variant="headline" align="center" color="inherit">
          Sheldon's Bio
        </Typography>
        <Typography
          paragraph
          variant="subheading"
          align="center"
          color="inherit">
          {profile.bio}
        </Typography>
      </Paper>
    </Fragment>
  );
};
ProfileHead.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHead);
