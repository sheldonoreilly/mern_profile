import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
//card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    // [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
    //   marginTop: theme.spacing.unit * 6,
    //   marginBottom: theme.spacing.unit * 6,
    //   padding: theme.spacing.unit * 3
    // },
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // color: 'red',
    display: 'flex',
    flexDirection: 'column'
    // justifyContent: 'center'
  }
});

const ProfileHead = props => {
  const { classes, profile, avatar } = props;
  console.log('PROFILE', profile);
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Paper className={classes.paperHeader}>
          <Typography variant="display2" align="center" color="inherit">
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
        </Paper>
        <Paper className={classes.paperHeader}>
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
      </div>
    </Fragment>
  );
};
ProfileHead.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHead);
