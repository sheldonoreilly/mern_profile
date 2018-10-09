import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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

class Education extends Component {
  state = {
    degree: '',
    degreeInvalid: false,
    degreeError: '',

    school: '',
    schoolInvalid: false,
    schoolError: '',

    fieldofstudy: '',
    fieldofstudyInvalid: false,
    fieldofstudyError: '',

    from: '',
    fromInvalid: false,
    fromError: '',

    to: '',
    current: '',
    description: ''
  };

  componentWillReceiveProps(nextProps) {
    //set errors to component state to reflect in UI
    const { errors } = nextProps;
    if (errors) {
      this.setState({
        //school
        schoolInvalid: errors.school ? true : false,
        schoolError: errors.school,
        //degree
        degreeInvalid: errors.degree ? true : false,
        degreeError: errors.degree,
        //field of study
        fieldofstudyInvalid: errors.fieldofstudy ? true : false,
        fieldofstudyError: errors.fieldofstudy,
        //from
        fromInvalid: errors.fromInvalid ? true : false,
        fromError: errors.fromInvalid
      });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    //deconstruct from state
    const { degree, school, fieldofstudy, from, to } = this.state;
    //construct our exp object es6
    const education = {
      degree,
      school,
      fieldofstudy,
      from,
      to
    };

    this.props.addEducation(education, this.props.history);
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
                  error={this.state.schoolInvalid}
                  helperText={this.state.schoolError}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('degree')}
                  name="degree"
                  label="Degree\Course"
                  required
                  value={degree}
                  error={this.state.degreeInvalid}
                  helperText={this.state.degreeError}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <TextField
                  onChange={this.handleChange('fieldofstudy')}
                  name="fieldofstudy"
                  label="Field of Study"
                  value={fieldofstudy}
                  error={this.state.fieldofstudyInvalid}
                  helperText={this.state.fieldofstudyError}
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
Education.propTypes = {
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
  { getCurrentProfile, addEducation }
)(withRouter(withStyles(styles)(Education)));
