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
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile, setProfile } from '../../actions/profileActions';

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
  },
  submit: {
    marginTop: theme.spacing.unit * 5
  }
});

class CreateProfile extends Component {
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

  handleFormSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    //destructure relevent props

    //sor this has to be cleaned 8(
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

    //sor
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
              Create your Profile
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
                  required
                  helperText="A unique handle for your profile URL.  This can't be changed later."
                />
              </FormControl>
              {/* prop status */}
              <FormControl margin="dense" fullWidth>
                <InputLabel>Select Professional Status</InputLabel>
                <Select
                  value={status}
                  onChange={this.handleChange('status')}
                  inputProps={{
                    name: 'status',
                    id: 'status'
                  }}>
                  : 'status' }}>
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
                  name="gitHubUserName"
                  label="GitHub Username"
                  value={gitHubUserName}
                  helperText={
                    'If you want a GitHub link to your latest repositories.'
                  }
                />
              </FormControl>
              <Button
                onClick={this.handleFormSubmit}
                type="submit"
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
CreateProfile.propTypes = {
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
)(withStyles(styles)(CreateProfile));
