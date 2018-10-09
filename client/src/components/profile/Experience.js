import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
//card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  paperHeader: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2,
    // [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
    //   marginTop: theme.spacing.unit * 6,
    //   marginBottom: theme.spacing.unit * 6,
    //   padding: theme.spacing.unit * 3
    // },
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // color: 'red',
    display: 'flex',
    flexDirection: 'column'
    // justifyContent: 'center'
  }
});

const Experience = props => {
  const { classes, profile, avatar } = props;
  return (
    <Paper className={classes.paperHeader}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.cardtitle} color="textPrimary">
            {'profile.experience[0].company'}
          </Typography>
          <Typography
            className={classes.cardsubtitle}
            color="textPrimary"
            gutterBottom>
            {'profile.experience[0].location'}
          </Typography>
          <Typography
            className={classes.cardsubtitle}
            color="textPrimary"
            gutterBottom>
            {'profile.experience[0].description'}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
Experience.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Experience);
