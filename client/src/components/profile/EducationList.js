import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Education from './Education';
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
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(25))
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(15))
  },
  divider: {
    width: '100%',
    backgroundColor: 'black'
  }
});

const EducationList = props => {
  const { classes } = props;
  const { education } = props.profile;

  const experiences = education.map((ex, index) => (
    <Fragment>
      <Divider className={classes.divider} />
      <Education
        key={index}
        company={ex.school}
        title={ex.degree}
        location={ex.fieldofstudy}
        description={ex.description}
      />
    </Fragment>
  ));
  return (
    <Paper className={classes.paper}>
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
