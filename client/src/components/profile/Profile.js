import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import ProfileHeader from './ProfileHeader';
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile } from '../../actions/profileActions';

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
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

class Profile extends Component {
  state = {
    profileLoaded: false,
    avatar: ''
  };
  //sor sanity check here - without this the profile isnt available - check/confirm this
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    console.log('this.props', this.props);
    const { classes } = this.props;

    if (!this.props.profile.profile) {
      return <h1>Loading...</h1>;
    }

    // this.state.profileLoaded = true;
    const avatar = this.props.profile.profile.user.avatar;
    const name = this.props.profile.profile.user.name;
    return (
      <div>
        <CssBaseline />
        <ProfileHeader name={name} avatar={avatar} />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withStyles(styles)(Profile));
