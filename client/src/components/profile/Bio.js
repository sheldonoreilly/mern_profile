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
  }
});

const Skills = props => {
  const { classes, profile } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="headline" align="center">
        Sheldon's Bio
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
