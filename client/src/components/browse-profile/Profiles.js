import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//card
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import StarIcon from '@material-ui/icons/Star';
import CheckBox from '@material-ui/icons/CheckBox';
import Grid from '@material-ui/core/Grid';

// theme.typography.pxToRem
const styles = theme => ({
  //   root: {
  //     width: '100%'
  //   },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    //so here 600 and above
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  cardContent: {
    display: 'flex',
    padding: 0
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(25))
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(20))
  },
  details: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  gravtar: {
    borderRadius: '50%',
    // margin: 'auto',
    // padding: '25px',
    width: '150px',
    height: '150px'
  },
  button: {
    // margin: theme.spacing.unit,
    padding: theme.spacing.unit
  },
  skills: {
    padding: theme.spacing.unit / 4
  },

  listdiv: {
    display: 'block',
    width: 'auto'
  },
  skilllist: {
    // display: 'flex',
    justifyContent: 'flex-end'
  }
});

const Profiles = props => {
  const { classes } = props;
  console.log('From Profiles props.profile :', props.profile);
  return (
    <Grid container spacing={24} className={classes.layout}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {/* this is the card with avatar and name */}
          <CardContent className={classes.cardContent}>
            <div>
              <img
                className={classes.gravtar}
                src={props.profile.user.avatar}
                alt="Gravatar"
              />
            </div>
            <div className={classes.details}>
              <Typography align="left" className={classes.cardtitle}>
                {props.profile.user.name}
              </Typography>
              <Typography
                align="left"
                className={classes.cardsubtitle}
                gutterBottom>
                {props.profile.status}
              </Typography>
              <Button
                className={classes.button}
                variant="contained"
                color="primary">
                View Profile
              </Button>
            </div>
          </CardContent>
          <div className={classes.skilllist}>
            <List>
              {props.profile.skills.map((skill, index) => {
                return (
                  <ListItem key={index} className={classes.skills}>
                    <ListItemIcon>
                      <CheckBox />
                    </ListItemIcon>
                    <ListItemText primary={skill} />
                  </ListItem>
                );
              })}
            </List>
          </div>
          {/* </div> */}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
    </Grid>
  );
};
Profiles.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Profiles);
