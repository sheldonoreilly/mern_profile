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
    padding: theme.spacing.unit * 2,

    backgroundImage:
      'linear-gradient(left, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(219,219,219,1) 73%, rgba(254,254,254,1) 100%)'
  },

  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px',
    width: '250px',
    height: '250px'
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
              personal={profile.website}
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
