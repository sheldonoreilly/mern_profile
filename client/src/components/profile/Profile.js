import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import ProfileHead from './ProfileHead';
import Skills from './Skills';
import Bio from './Bio';
//redux
import { connect } from 'react-redux';
//actions
import { getProfileByHandle } from '../../actions/profileActions';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import ProfileGithub from './ProfileGitHub';

const styles = theme => ({
  root: {},
  layout: {
    //so 600 and below
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    //so here 600 and above
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

class Profile extends Component {
  state = {
    profileLoaded: false,
    avatar: ''
  };

  componentDidMount() {
    //we are given the handle via the url
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
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
          <Bio profile={profile1} />
          <Skills skills={profile1.skills} />
          <ExperienceList profile={profile1} />
          <EducationList profile={profile1} />
          {profile1.gitHubUserName ? (
            <ProfileGithub username={profile1.gitHubUserName} />
          ) : (
            ''
          )}
        </Fragment>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(withStyles(styles)(Profile));

// Profile.propTypes = {
//   classes: PropTypes.object.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   profile: state.profile,
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { getCurrentProfile }
// )(withStyles(styles)(Profile));
