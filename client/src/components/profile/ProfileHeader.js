import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

//card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//ex panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Experience from './Experience';
import ProfileHead from './ProfileHead';


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
  },
  gravtar: {
    borderRadius: '50%',
    margin: 'auto',
    padding: '25px'
    // marginBotton: '25px'
  }
});

const ProfileHeader = props => {
  const { classes, profile, avatar } = props;
  console.log('PROFILE', profile);
  return (
    <ProfileHead/>
       <Paper className={classes.paperHeader}>
          <Typography variant="headline" align="center" color="inherit">
            {'Skills'}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}>
            <Chip label="Java" className={classes.chip} />
            <Chip label="C#" className={classes.chip} />
            <Chip label="JavaScript" className={classes.chip} />
            <Chip label="C++" className={classes.chip} />
            <Chip label="React/Redux" className={classes.chip} />
            <Chip label="C#" className={classes.chip} />
            <Chip label="C++" className={classes.chip} />
          </div>
        </Paper>
        <Experience />
        <Experience />

        
  );
};

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHeader);
