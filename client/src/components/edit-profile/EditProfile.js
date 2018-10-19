import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
import Icon from '@mdi/react';
import { mdiTwitterCircle } from '@mdi/js';
import { mdiGithubCircle } from '@mdi/js';
import { mdiLinkedinBox } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiWeb } from '@mdi/js';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
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
  socialmedia: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 1
  },
  socialmedialink: {
    margin: theme.spacing.unit * 1
  },
  submit: {
    marginTop: theme.spacing.unit * 5
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
    bio: '',
    personal: '',
    twitter: '',
    facebook: '',
    linkedIn: '',
    youtube: '',
    github: ''
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
      profile.personal = !isEmpty(profile.social.personal)
        ? profile.social.personal
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.linkedIn = !isEmpty(profile.social.linkedIn)
        ? profile.social.linkedIn
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.github = !isEmpty(profile.social.github)
        ? profile.social.github
        : '';

      //we switch the status value from string to int for internal usage
      profile.status = this.getStatusValue(profile.status);

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
        personal: profile.personal,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedIn: profile.linkedIn,
        youtube: profile.youtube,
        github: profile.github
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
      bio,
      personal,
      linkedIn,
      facebook,
      twitter,
      github
    } = this.state;

    const profile = {
      handle,
      status,
      company,
      website,
      location,
      gitHubUserName,
      skills,
      bio,
      personal,
      linkedIn,
      facebook,
      twitter,
      github
    };

    //switch back from integer value of status to str value
    profile.status = this.getStatusStr(status);
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

  getStatusValue(str) {
    switch (str) {
      case 'Developer':
        return 10;
      case 'Junior Developer':
        return 20;
      case 'Senior Developer':
        return 30;
      case 'Manager':
        return 40;
      case 'Student or Learning':
        return 50;
      case 'Instructor or Teacher':
        return 60;
      case 'Intern':
        return 70;
      default:
        return 80;
    }
  }

  getStatusStr(intVal) {
    switch (intVal) {
      case 10:
        return 'Developer';
      case 20:
        return 'Junior Developer';
      case 30:
        return 'Senior Developer';
      case 40:
        return 'Manager';
      case 50:
        return 'Student or Learning';
      case 60:
        return 'Instructor or Teacher';
      case 70:
        return 'Intern';
      default:
        return 'Other';
    }
  }

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
      bio,
      personal,
      linkedIn,
      facebook,
      twitter,
      github
    } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Button component={Link} to="/dashboard">
              Go Back
            </Button>

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
                <InputLabel>Select Professional Status</InputLabel>
                <Select
                  defaultValue={this.getStatusValue(status)}
                  value={status}
                  onChange={this.handleChange('status')}>
                  <MenuItem value={10}>Developer</MenuItem>
                  <MenuItem value={20}>Junior Developer</MenuItem>
                  <MenuItem value={30}>Senior Developer</MenuItem>
                  <MenuItem value={40}>Manager</MenuItem>
                  <MenuItem value={50}>Student or Learning</MenuItem>
                  <MenuItem value={60}>Instructor or Teacher</MenuItem>
                  <MenuItem value={70}>Intern</MenuItem>
                  <MenuItem value={80}>Other</MenuItem>
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
                  label="A short bio of yourself..."
                  value={bio}
                  multiline
                  rows="3"
                  rowsMax="6"
                  variant="outlined"
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

              <Typography className={classes.socialmedia} variant="headline">
                Social Media
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl className={classes.socialmedialink}>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={this.handleChange('personal')}
                    value={personal}
                    startAdornment={
                      <InputAdornment position="start">
                        <Icon path={mdiWeb} size={1} horizontal vertical />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.socialmedialink}>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={this.handleChange('github')}
                    value={github}
                    startAdornment={
                      <InputAdornment position="start">
                        <Icon
                          path={mdiGithubCircle}
                          size={1}
                          horizontal
                          vertical
                        />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.socialmedialink}>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={this.handleChange('linkedIn')}
                    value={linkedIn}
                    startAdornment={
                      <InputAdornment position="start">
                        <Icon
                          path={mdiLinkedinBox}
                          size={1}
                          horizontal
                          vertical
                        />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.socialmedialink}>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={this.handleChange('facebook')}
                    value={facebook}
                    startAdornment={
                      <InputAdornment position="start">
                        <Icon path={mdiFacebook} size={1} horizontal vertical />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.socialmedialink}>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={this.handleChange('twitter')}
                    value={twitter}
                    startAdornment={
                      <InputAdornment position="start">
                        <Icon
                          path={mdiTwitterCircle}
                          size={1}
                          horizontal
                          vertical
                        />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

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
