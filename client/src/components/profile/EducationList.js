import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Education from './Education';

// theme.typography.pxToRem
const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2,

    display: 'flex',
    flexDirection: 'column'
  },
  sectionheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  }
});

const EducationList = props => {
  const { classes } = props;
  const { education } = props.profile;

  const educationItems = education.map((ex, index) => (
    <Fragment key={index}>
      <Education
        company={ex.school}
        title={ex.degree}
        location={ex.fieldofstudy}
        description={ex.description}
      />
    </Fragment>
  ));
  return (
    <Paper elevation={22} className={classes.paper}>
      <Typography
        className={classes.sectionheader}
        variant="headline"
        align="center">
        {'Education'}
      </Typography>
      {educationItems}
    </Paper>
  );
};

EducationList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EducationList);
