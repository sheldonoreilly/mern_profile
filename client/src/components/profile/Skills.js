import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  chip: {
    margin: theme.spacing.unit
  },
  sectionheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
});

const Skills = props => {
  const { classes, skills } = props;

  return (
    <Paper elevation={22} className={classes.paper}>
      <Typography
        className={classes.sectionheader}
        variant="headline"
        align="center">
        {'Skills'}
      </Typography>
      <Paper elevation={22} className={classes.paper}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} className={classes.chip} />
          ))}
        </div>
      </Paper>
    </Paper>
  );
};
Skills.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Skills);
