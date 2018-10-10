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
  }
});

const Skills = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="headline" align="center">
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
        <Chip label="C++" className={classes.chip} />
        <Chip label="React/Redux" className={classes.chip} />
        <Chip label="C#" className={classes.chip} />
        <Chip label="C++" className={classes.chip} />
      </div>
    </Paper>
  );
};
Skills.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Skills);