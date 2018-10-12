import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Social from './social';
import isEmpty from '../../validation/is-empty';
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile, setProfile } from '../../actions/profileActions';

const styles = theme => ({
  root: {},
  layout: {
    //so 600 and below

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
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },

  // font icon
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      // color: red[800]
    }
  },
  socialmedialink: {
    margin: theme.spacing.unit * 1
  }
});

class EditProfile extends Component {
  state = {
    handle: '',
    status: '',
    company: '',
    website: '',
    location: '',
    gitHubUserName: '',
    skills: '',
    bio: ''
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.gitHubUserName = !isEmpty(profile.gitHubUserName)
        ? profile.gitHubUserName
        : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        gitHubUserName: profile.gitHubUserName,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube
      });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    //destructure relevent props
    const {
      handle,
      status,
      company,
      website,
      location,
      gitHubUserName,
      skills,
      bio
    } = this.state;

    const profile = {
      handle,
      status,
      company,
      website,
      location,
      gitHubUserName,
      skills,
      bio
    };
    //add the user id to the tobe actioned profile
    profile.userId = user.id;
    //'connect' gets us access to the action
    this.props.setProfile(profile);

    //go back to dashboard
    this.props.history.push('./dashboard');
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;
    const {
      handle,
      status,
      company,
      location,
      website,
      skills,
      gitHubUserName,
      bio
    } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              variant="display2"
              align="center"
              color="textPrimary"
              style={{ marginBottom: 0, marginTop: '32px' }}>
              Edit your Profile
            </Typography>
            <Typography
              style={{ marginTop: 0 }}
              color="textPrimary"
              align="center">
              Let People know who you are!
            </Typography>
            <form className={classes.form}>
              {/* handle */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('handle')}
                  name="handle"
                  label="Handle"
                  value={handle}
                  disabled
                  required
                  helperText="A unique handle for your profile URL.  This can't be changed later."
                />
              </FormControl>
              {/* prop status */}
              <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor="status">
                  Select Professional Status
                </InputLabel>
                <Select
                  value={status}
                  onChange={this.handleChange('status')}
                  inputProps={{
                    name: 'status',
                    id: 'status'
                  }}>
                  <MenuItem value={10}>Developer</MenuItem>
                  <MenuItem value={10}>Junior Developer</MenuItem>
                  <MenuItem value={10}>Senior Developer</MenuItem>
                  <MenuItem value={10}>Manager</MenuItem>
                  <MenuItem value={10}>Student or Learning</MenuItem>
                  <MenuItem value={10}>Instructor or Teacher</MenuItem>
                  <MenuItem value={10}>Intern</MenuItem>
                  <MenuItem value={10}>Other</MenuItem>
                </Select>
              </FormControl>
              {/* company */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('company')}
                  name="company"
                  label="Company"
                  value={company}
                />
              </FormControl>
              {/* website */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('website')}
                  name="website"
                  label="Website"
                  value={website}
                />
              </FormControl>
              {/* location */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('location')}
                  name="location"
                  label="Location"
                  value={location}
                />
              </FormControl>
              {/* skills */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('skills')}
                  name="skills"
                  label="Skills"
                  value={skills}
                  required
                  helperText={
                    'Please use a comma delimited string. e.g. C++, JavaScript, etc.'
                  }
                />
              </FormControl>
              {/* bio */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('bio')}
                  name="Bio"
                  label="A short bio of yourself"
                  value={bio}
                  multiline
                  rows="3"
                  rowsMax="6"
                />
              </FormControl>
              {/* GitHub */}
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('gitHubUserName')}
                  name="github"
                  label="GitHub Username"
                  value={gitHubUserName}
                  helperText={
                    'If you want a GitHub link to your latest repositories.'
                  }
                />
              </FormControl>

              <Button variant="contained" color="primary">
                Social Media
              </Button>
              <Social />

              <Button
                type="submit"
                onClick={this.handleFormSubmit}
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}>
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}
EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, setProfile }
)(withStyles(styles)(EditProfile));
