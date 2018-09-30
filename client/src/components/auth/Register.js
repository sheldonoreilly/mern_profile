import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.secondary.main
  }
});

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_repeat: '',
    usernameInvalid: false,
    usernameError: '',
    emailInvalid: false,
    emailError: '',
    passwordInvalid: false,
    passwordError: '',
    password_repeatInvalid: false,
    password_repeatError: ''
  };

  handleChange = name => ({ target: { value } }) => {
    console.log('handleChange = name => ({ target: { value } }) => {');
    console.log('value :', value);
    console.log('name :', name);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log('Form Submit');
    console.log('this.state :', this.state);

    axios
      .post('/api/users/register', this.state)
      .then(res => {
        console.log('res :', res);
      })
      .catch(err => {
        console.log('err.response.data :', err.response.data);
        this.setState({
          //username
          usernameInvalid: err.response.data.name ? true : false,
          usernameError: err.response.data.name,
          //email
          emailInvalid: err.response.data.email ? true : false,
          emailError: err.response.data.email,
          //password
          passwordInvalid: err.response.data.password ? true : false,
          passwordError: err.response.data.password,
          //password repeat
          password_repeatInvalid: err.response.data.password_repeat
            ? true
            : false,
          password_repeatError: err.response.data.password_repeat
        });
      });
  };

  render() {
    const { classes } = this.props;
    //destructure
    const { name, email, password, password_repeat } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AssignmentIcon />
            </Avatar>
            <Typography variant="headline">Sign Up!</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  onChange={this.handleChange('name')}
                  name="name"
                  label="Name"
                  value={name}
                  autoFocus
                  autoComplete="name"
                  error={this.state.usernameInvalid}
                  helperText={this.state.usernameError}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  onChange={this.handleChange('email')}
                  name="email"
                  label="Email"
                  value={email}
                  autoComplete="email"
                  error={this.state.emailInvalid}
                  helperText={this.state.emailError}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  onChange={this.handleChange('password')}
                  name="password"
                  label="Password"
                  value={password}
                  error={this.state.passwordInvalid}
                  helperText={this.state.passwordError}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  onChange={this.handleChange('password_repeat')}
                  name="password_repeat"
                  label="Confirm Password"
                  value={password_repeat}
                  error={this.state.password_repeatInvalid}
                  helperText={this.state.password_repeatError}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.handleFormSubmit}>
                Sign Up
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
