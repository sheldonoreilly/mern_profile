import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';
import Profiles from './Profiles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//mui styling
const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    //this says that it will grow to a maximum of 900
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    // marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

class Browse extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles } = this.props.profile;
    const { classes } = this.props;
    if (!profiles) {
      return <div>Loading</div>;
    }

    const profileCards = profiles.map((profile, index) => {
      return <Profiles key={index} profile={profile} />;
    });

    return (
      <Paper className={classes.paper}>
        <Typography
          variant="display2"
          align="center"
          color="textPrimary"
          style={{ padding: '32px' }}>
          Developer Profiles
        </Typography>
        {profileCards}
      </Paper>
    );
  }
}

Browse.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  classes: PropTypes.object.isRequired
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(withStyles(styles)(Browse));
