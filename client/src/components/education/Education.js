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
import { getCurrentProfile, addEducation } from '../../actions/profileActions';

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

class Education extends Component {
  state = {
    degree: '',
    school: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: '',
    description: ''
  };

  componentDidMount() {}

  handleFormSubmit = e => {
    e.preventDefault();
    console.log('education :', this.state);

    //const { user } = this.props.auth;

    //construct our edu object from state
    const education = {
      degree: this.state.degree,
      school: this.state.school,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to
      // current: '',
      // description
    };

    //sor ???
    //add the user id to the tobe actioned profile
    //is this necessary - its mined from the requeest on the server??
    //education.userId = user.id;
    //'connect' gets us access to the action
    this.props.addEducation(education);
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
      degree,
      school,
      fieldofstudy,
      from,
      to,
      current,
      description
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
              Add Education
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
                  onChange={this.handleChange('school')}
                  name="school"
                  required
                  label="School"
                  value={school}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('degree')}
                  name="degree"
                  label="Degree\Course"
                  required
                  value={degree}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('fieldofstudy')}
                  name="fieldofstudy"
                  label="Field of Study"
                  value={fieldofstudy}
                />
              </FormControl>
              <FormControl margin="dense">
                <TextField
                  id="date"
                  label="From"
                  type="date"
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
Education.propTypes = {
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
  { getCurrentProfile, addEducation }
)(withStyles(styles)(Education));
