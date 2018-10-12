import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Experience from './Experience';
//divider
import Divider from '@material-ui/core/Divider';

// theme.typography.pxToRem
const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    //sor
    display: 'flex',
    flexDirection: 'column'
  },
  divider: {
    width: '100%',
    backgroundColor: 'black'
  }
});

const ExperienceList = props => {
  const { classes } = props;
  const { experience } = props.profile;

  const experiences = experience.map((ex, index) => (
    <Fragment key={index}>
      <Divider className={classes.divider} />
      <Experience
        company={ex.company}
        title={ex.title}
        location={ex.location}
        description={ex.description}
      />
    </Fragment>
  ));
  return (
    <Paper className={classes.paper}>
      <Typography variant="headline" align="center">
        {'Experience'}
      </Typography>
      {experiences}
    </Paper>
  );
};

ExperienceList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ExperienceList);
