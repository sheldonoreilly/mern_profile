import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';
import Profiles from './Profiles';
import Typography from '@material-ui/core/Typography';
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

const mapStateToProps = state => ({
  profile: state.profile,
  classes: PropTypes.object.isRequired
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Browse);
