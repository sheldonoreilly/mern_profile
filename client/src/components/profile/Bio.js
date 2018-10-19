import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  sectionheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
});

const Skills = props => {
  const { classes, profile } = props;
  return (
    <Paper elevation={22} className={classes.paper}>
      <Typography
        className={classes.sectionheader}
        variant="headline"
        align="center">
        {`${profile.user.name}'s Bio`}
      </Typography>
      <Typography variant="subheading" align="center">
        {profile.bio}
      </Typography>
    </Paper>
  );
};
Skills.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Skills);
