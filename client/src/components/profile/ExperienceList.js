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
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,

    display: 'flex',
    flexDirection: 'column'
  },

  sectionheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
});

const ExperienceList = props => {
  const { classes } = props;
  const { experience } = props.profile;

  const experiences = experience.map((ex, index) => (
    <Fragment key={index}>
      {/* <Divider className={classes.divider} /> */}
      <Experience
        company={ex.company}
        title={ex.title}
        location={ex.location}
        description={ex.description}
      />
    </Fragment>
  ));
  return (
    <Fragment>
      <Paper elevation={22} className={classes.paper}>
        <Typography
          className={classes.sectionheader}
          variant="headline"
          align="center">
          {'Experience'}
        </Typography>
        {experiences}
      </Paper>
    </Fragment>
  );
};

ExperienceList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ExperienceList);
