import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import ProfileHead from './ProfileHead';
import Skills from './Skills';
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile } from '../../actions/profileActions';
import Experience from './Experience';
import ExperienceList from './ExperienceList';

const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.common.white
  },

  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
    /* [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    },*/
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white
    // display: 'flex',
    // flexDirection: 'column'
  }
});

class Profile extends Component {
  state = {
    profileLoaded: false,
    avatar: ''
  };
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    console.log('this.props.profile.profile :', this.props.profile.profile);
    const { classes } = this.props;
    const profile1 = this.props.profile.profile;

    if (!profile1) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className={classes.layout}>
        <CssBaseline />
        <Fragment>
          <CssBaseline />
          <ProfileHead profile={profile1} avatar={profile1.user.avatar} />
          <Skills skills={profile1.skills} />
          <ExperienceList profile={profile1} />
        </Fragment>
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
