import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {},
  //   paperHeader: {
  //     marginTop: theme.spacing.unit * 1,
  //     marginBottom: theme.spacing.unit * 1,
  //     padding: theme.spacing.unit * 2,
  //     // [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
  //     //   marginTop: theme.spacing.unit * 6,
  //     //   marginBottom: theme.spacing.unit * 6,
  //     //   padding: theme.spacing.unit * 3
  //     // },
  //     backgroundColor: theme.palette.grey[800],
  //     color: theme.palette.common.white,
  //     display: 'flex',
  //     flexDirection: 'column'
  //   },
  chip: {
    margin: theme.spacing.unit
  }
});

const Skills = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paperHeader}>
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
