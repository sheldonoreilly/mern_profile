import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Experience from './Experience';

// theme.typography.pxToRem
const styles = theme => ({
  root: {},
  paperHeader: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    //sor
    display: 'flex',
    flexDirection: 'column'
  }
});

const ExperienceList = props => {
  const { classes } = props;
  const { experience } = props.profile;

  const experiences = experience.map((ex, index) => (
    <Experience
      key={index}
      company={ex.company}
      title={ex.title}
      location={ex.location}
      description={ex.description}
    />
  ));
  return (
    <Paper className={classes.paperHeader}>
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
