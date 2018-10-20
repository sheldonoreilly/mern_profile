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
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

const Education = props => {
  const { classes, company, title, location, description } = props;
  return (
    <Paper elevation={22} className={classes.paper}>
      <Card>
        <CardContent>
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
Education.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Education);
