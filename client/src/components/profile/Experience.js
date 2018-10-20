import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// theme.typography.pxToRem
const styles = theme => ({
  root: {},
  card: {
    display: 'flex'
  },
  cardcontent: {
    width: '100%',
    display: 'block'
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(20)),
    textDecoration: 'none'
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(15))
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2
  }
});

const Experience = props => {
  const { classes, company, title, location, description } = props;
  return (
    <Paper elevation={22} className={classes.paper}>
      <Card>
        <CardContent elevation={0}>
          <Typography className={classes.cardtitle}>{company}</Typography>
          <Typography className={classes.cardsubtitle} gutterBottom>
            {title}
          </Typography>
          <Typography gutterBottom>{location}</Typography>
          <Typography gutterBottom>{description}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
Experience.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Experience);
