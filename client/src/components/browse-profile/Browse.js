import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';
import Profiles from './Profiles';
import Typography from '@material-ui/core/Typography';

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
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

class Browse extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles } = this.props.profile;
    if (!profiles) {
      return <div>Loading</div>;
    }
    const profileCards = profiles.map((profile, index) => (
      <Profiles key={index} profile={profile} />
    ));

    return (
      <Fragment>
        <Typography variant="display1" align="center">
          {'Developer Profiles'}
        </Typography>
        {profileCards}
      </Fragment>
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
