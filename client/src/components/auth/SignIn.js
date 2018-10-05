import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
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
//redux
import { connect } from 'react-redux';
//actions
import { logIn } from '../../actions/authActions';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    emailInvalid: false,
    emailError: '',
    passwordInvalid: false,
    passwordError: ''
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logIn(userData);
  };

  //if logged in then we dont want to be here -> redirect to dashboard
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('./dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    //checked if now logged in
    if (auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    //set errors to component state to reflect in UI
    const { errors } = nextProps;
    if (errors) {
      this.setState({
        //email
        emailInvalid: errors.email ? true : false,
        emailError: errors.email,
        //password
        passwordInvalid: errors.password ? true : false,
        passwordError: errors.password
      });
    }
  }

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign in</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  onChange={this.handleChange('email')}
                  name="email"
                  label="Email"
                  value={email}
                  required
                  autoComplete="email"
                  error={this.state.emailInvalid}
                  helperText={this.state.emailError}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  onChange={this.handleChange('password')}
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  required
                  error={this.state.passwordInvalid}
                  helperText={this.state.passwordError}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
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
        </main>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logIn }
)(withStyles(styles)(SignIn));
