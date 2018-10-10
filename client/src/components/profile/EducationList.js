import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Education from './Education';

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

const EducationList = props => {
  const { classes } = props;
  const { education } = props.profile;

  const experiences = education.map((ex, index) => (
    <Education
      key={index}
      company={ex.school}
      title={ex.degree}
      location={ex.fieldofstudy}
      description={ex.description}
    />
  ));
  return (
    <Paper className={classes.paperHeader}>
      <Typography variant="headline" align="center">
        {'Education'}
      </Typography>
      {experiences}
    </Paper>
  );
};

EducationList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EducationList);
