import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

// theme.typography.pxToRem
const styles = theme => ({
  root: {},
  cardContent: {
    display: 'flex'
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(25))
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(20))
  },
  gravtar: {
    borderRadius: '50%',
    // margin: 'auto',
    padding: '25px',
    width: '100px',
    height: '100px'
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit
  }
});

const Profiles = props => {
  //const { user, company, title, location, description } = props.profile;
  const { classes } = props;
  console.log('From Profiles props.profile :', props.profile);
  return (
    <Paper>
      <Card>
        <CardContent className={classes.cardContent}>
          <img
            className={classes.gravtar}
            src={props.profile.user.avatar}
            alt="Image of user."
          />
          <div>
            <Typography className={classes.cardtitle}>
              {props.profile.user.name}
            </Typography>
            <Typography className={classes.cardsubtitle} gutterBottom>
              {props.profile.status}
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="primary">
              View Profile
            </Button>
          </div>
          {/* <Typography gutterBottom>{props.profile.skills}</Typography> */}
        </CardContent>
      </Card>
    </Paper>
  );
};
Profiles.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Profiles);
