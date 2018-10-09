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
import { getCurrentProfile, addExperience } from '../../actions/profileActions';

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

class Experience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    description: '',
    from: '',
    to: '',
    current: ''
  };

  componentDidMount() {}

  handleFormSubmit = e => {
    e.preventDefault();
    console.log('Experience :', this.state);

    const { company, title, location, description, from, to } = this.state;

    //construct our exp object from state
    const experience = {
      company,
      title,
      location,
      description,
      from,
      to
    };

    //sor ???
    //add the user id to the tobe actioned profile
    //is this necessary - its mined from the requeest on the server??
    //experience.userId = user.id;
    //'connect' gets us access to the action
    this.props.addExperience(experience);
    //go back to dashboard
    //sor this seems to need to be moved, async call needs to be finished before dashboard (to the action maybe
    //this.props.history.push('./dashboard');
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
              Add degrees, certificates, courses, etc
            </Typography>
            <form className={classes.form}>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('company')}
                  name="company"
                  required
                  label="Company"
                  value={company}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('title')}
                  name="title"
                  label="Title"
                  required
                  value={title}
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
                  label="Description"
                  value={description}
                />
              </FormControl>
              <FormControl margin="dense">
                <TextField
                  id="date"
                  label="From"
                  defaultValue="2017-05-24"
                  type="date"
                  required
                  onChange={this.handleChange('from')}
                  value={from}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </FormControl>
              <br />
              <FormControl margin="dense">
                <TextField
                  id="date"
                  label="To"
                  defaultValue="2017-05-24"
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, addExperience }
)(withStyles(styles)(Experience));
