import React, { Component, Fragment } from 'react';
//router
import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Person from '@material-ui/icons/Person';
import Update from '@material-ui/icons/Update';
import School from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
//actions
import {
  getCurrentProfile,
  deleteExperience,
  deleteEducation
} from '../../actions/profileActions';
//helper
import isEmpty from '../../validation/is-empty';
//internal component
import DataTable from './DashTable';
import { DataType } from './DashTable';

//mui styling
const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    //this says that it will grow to a maximum of 900
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

class Dashboard extends Component {
  state = {
    value: ''
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  deleteExperience = id => {
    this.props.deleteExperience();
  };

  deleteEducation = id => {
    this.props.deleteEducation();
  };

  render() {
    const { classes } = this.props;
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    //sor need to work on spinner and such
    let greeting = `Welcome, ${user.name}`;

    //sor profile is an empty obj - user hasnt created one yet
    //Loading ... - stuff needs a serious facelift
    if (loading) {
      greeting = 'Loading';
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Grid container>
            <Grid item xs={12}>
              <Paper elevation="22" className={classes.paper}>
                <Typography
                  variant="display2"
                  color="textPrimary"
                  style={{ marginTop: '24px' }}>
                  Dashboard
                </Typography>
                <Typography color="textSecondary" style={{ marginTop: 0 }}>
                  {greeting}
                </Typography>
                {isEmpty(profile) ? (
                  <Button component={Link} to="/createprofile">
                    Add Profile
                  </Button>
                ) : (
                  <Fragment>
                    {/* // load the 'preview profile' dashboard screen */}
                    <Grid
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justify: 'flex-start'
                      }}>
                      {/* <List component="nav"> */}
                      <ListItem
                        button
                        component={Link}
                        to="/editprofile"
                        disableGutters
                        style={{ width: 'auto' }}>
                        <ListItemIcon style={{ marginRight: 4 }}>
                          <Person />
                        </ListItemIcon>
                        <ListItemText
                          primary="Edit Profile"
                          style={{ padding: '0px 12px 0px 0px' }}
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/addeducation"
                        disableGutters
                        style={{ width: 'auto' }}>
                        <ListItemIcon style={{ marginRight: 4 }}>
                          <School />
                        </ListItemIcon>
                        <ListItemText
                          primary="Add Education"
                          style={{ padding: '0px 12px 0px 0px' }}
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/addexperience"
                        disableGutters
                        style={{ width: 'auto' }}>
                        <ListItemIcon style={{ marginRight: 4 }}>
                          <Update />
                        </ListItemIcon>
                        <ListItemText
                          primary="Add Experience"
                          style={{
                            padding: '0px 12px 0px 0px',
                            fontSize: '0.8rem'
                          }}
                        />
                      </ListItem>
                    </Grid>
                    <DataTable
                      type={DataType.Education}
                      data={profile.education}
                      handler={this.deleteEducation}
                    />
                    <DataTable
                      type={DataType.Experience}
                      data={profile.experience}
                      handler={this.deleteExperience}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}>
                      <Button
                        variant="outlined"
                        style={{
                          margin: '24px 0px 8px 32px '
                        }}>
                        <Typography
                          variant="button"
                          align="center"
                          color="error">
                          Delete Account
                        </Typography>
                      </Button>
                    </div>
                  </Fragment>
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteExperience, deleteEducation }
)(withStyles(styles)(Dashboard));
