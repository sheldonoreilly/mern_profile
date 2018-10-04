import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

//react/redux
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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

  //if logged in then we dont want to be here -> redirect to dashboard
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('./dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    //set errors to component state to reflect in UI
    if (nextProps.errors) {
      const { errors } = nextProps;
      this.setState({
        //username
        usernameInvalid: errors.name ? true : false,
        usernameError: errors.name,
        //email
        emailInvalid: errors.email ? true : false,
        emailError: errors.email,
        //password
        passwordInvalid: errors.password ? true : false,
        passwordError: errors.password,
        //password repeat
        password_repeatInvalid: errors.password_repeat ? true : false,
        password_repeatError: errors.password_repeat
      });
    }
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    //destructure relevent props
    const { name, email, password, password_repeat } = this.state;

    const newUser = {
      name,
      email,
      password,
      password_repeat
    };

    //'connect' gets us access to the action
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    //destructure
    const { classes } = this.props;
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
              <FormControl margin="normal" fullWidth>
                <TextField
                  onChange={this.handleChange('name')}
                  name="name"
                  label="Name"
                  value={name}
                  required
                  autoFocus
                  autoComplete="name"
                  error={this.state.usernameInvalid}
                  helperText={this.state.usernameError}
                />
              </FormControl>
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
              <FormControl margin="normal" fullWidth>
                <TextField
                  onChange={this.handleChange('password_repeat')}
                  name="password_repeat"
                  label="Confirm Password"
                  type="password"
                  value={password_repeat}
                  required
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
  classes: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

//redux - connect the state to the props
//this is after the state has been through the reducers
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

//make this a react-redux container
export default connect(
  mapStateToProps,
  { registerUser }
)(withStyles(styles)(withRouter(Register)));
