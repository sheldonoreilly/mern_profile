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
    // [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
    //   marginTop: theme.spacing.unit * 6,
    //   marginBottom: theme.spacing.unit * 6,
    //   padding: theme.spacing.unit * 3
    // },
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column'
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(25))
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(15))
  }
});

const ExperienceList = props => {
  const { classes, experience } = props.profile;

  const experiences = experience.map((ex, index) => (
    <Experience
      key={index}
      company={ex.company}
      title={ex.title}
      location={ex.location}
      description={ex.description}
    />
  ));
  return experiences;
};

ExperienceList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ExperienceList);
