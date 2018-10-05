import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

//sor add tooltips

class CreateProfile extends Component {
  state = {
    handle: '',
    pro: '',
    company: '',
    website: '',
    location: '',
    github: '',
    skills: '',
    bio: ''
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
      company,
      location,
      website,
      skills,
      github,
      bio
    } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              variant="display3"
              style={{ marginBottom: 0, marginTop: '32px' }}>
              Create Your Profile
            </Typography>
            <Typography style={{ marginTop: 0 }}>
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
                <InputLabel htmlFor="age-simple">
                  Select Professional Status
                </InputLabel>
                <Select
                  value={this.state.pro}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple'
                  }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                  onChange={this.handleChange('github')}
                  name="github"
                  label="GitHub Username"
                  value={github}
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
                Sign in
              </Button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}
CreateProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateProfile);
