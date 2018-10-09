import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

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
  },
  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px'
    // marginBotton: '25px'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

const ProfileHeader = props => {
  const { classes, profile, avatar } = props;
  console.log('PROFILE', this.profile);
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
          <Typography variant="headline" align="center" color="inherit">
            {'Skills'}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}>
            <Chip label="Java" className={classes.chip} />
            <Chip label="C#" className={classes.chip} />
            <Chip label="JavaScript" className={classes.chip} />
            <Chip label="C++" className={classes.chip} />
            <Chip label="React/Redux" className={classes.chip} />
            <Chip label="C#" className={classes.chip} />
            <Chip label="C++" className={classes.chip} />
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHeader);
