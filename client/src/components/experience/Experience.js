import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
//mui
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile, addExperience } from '../../actions/profileActions';

const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(700 + theme.spacing.unit * 2 * 2)]: {
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
class Experience extends Component {
  state = {
    company: '',
    companyInvalid: false,
    companyError: '',

    title: '',
    titleInvalid: false,
    titleError: '',

    location: '',
    description: '',

    from: '',
    fromInvalid: false,
    fromError: '',

    to: '',
    current: ''
  };

  componentWillReceiveProps(nextProps) {
    //set errors to component state to reflect in UI
    const { errors } = nextProps;
    if (errors) {
      this.setState({
        //company
        companyInvalid: errors.company ? true : false,
        companyError: errors.company,
        //title
        titleInvalid: errors.title ? true : false,
        titleError: errors.title,
        //from
        fromInvalid: errors.fromInvalid ? true : false,
        fromError: errors.fromInvalid
      });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    //deconstruct from state
    const { company, title, location, description, from, to } = this.state;
    //construct our exp object es6
    const experience = {
      company,
      title,
      location,
      description,
      from,
      to
    };

    this.props.addExperience(experience, this.props.history);
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { company, title, location, description, from, to } = this.state;
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
              Add Experience
            </Typography>
            <Typography
              style={{ marginTop: 0 }}
              color="textPrimary"
              align="center">
              Add jobs, relevant experience, etc.
            </Typography>
            <form className={classes.form}>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('company')}
                  name="company"
                  required
                  label="Company"
                  value={company}
                  error={this.state.companyInvalid}
                  helperText={this.state.companyError}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('title')}
                  name="title"
                  label="Title"
                  required
                  value={title}
                  error={this.state.titleInvalid}
                  helperText={this.state.titleError}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('location')}
                  name="location"
                  label="Location"
                  value={location}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('description')}
                  name="description"
                  label="Description..."
                  value={description}
                  multiline
                  rows="3"
                  rowsMax="6"
                  variant="outlined"
                />
              </FormControl>
              <FormControl margin="dense">
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  required
                  onChange={this.handleChange('from')}
                  value={from}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  error={this.state.fromInvalid}
                  helperText={this.state.fromError}
                />
              </FormControl>
              <br />
              <FormControl margin="dense">
                <TextField
                  id="date"
                  label="To"
                  onChange={this.handleChange('to')}
                  type="date"
                  value={to}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </FormControl>
              <br />
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
Experience.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  //auth gets us the user
  auth: state.auth,
  //errors from api
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, addExperience }
)(withRouter(withStyles(styles)(Experience)));
