import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Social from './Social';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },

  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px',
    width: '200px',
    height: '200px'
  }
});

const ProfileHead = props => {
  const { classes, profile, avatar } = props;

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="display2" color="textPrimary" align="center">
            {profile.user.name}
          </Typography>
          <img className={classes.gravtar} src={avatar} alt="Gravatar" />
          <Typography variant="headline" align="center">
            {'Software Engineer'}
          </Typography>
          <Typography variant="subheading" align="center">
            {profile.location}
          </Typography>
          {profile.social ? (
            <Social
              personal={profile.social.personal}
              github={profile.social.github}
              linkedIn={profile.social.linkedIn}
              twitter={profile.social.twitter}
            />
          ) : (
            ''
          )}
        </div>
      </Paper>
    </Fragment>
  );
};
ProfileHead.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHead);
