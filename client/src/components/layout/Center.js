import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const styles = theme => ({
  paperContainer: {
    height: '100vh',
    backgroundImage: `url(${'/images/layout.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
});

class Center extends React.Component {
  //if logged in then we dont want to be here -> redirect to dashboard
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('./dashboard');
    }
  }

  render() {
    const { classes } = this.props;
    // const { isAuthenticated, user } = this.props.auth;
    return (
      <Fragment>
        <Paper className={classes.paperContainer} />
      </Fragment>
    );
  }
}

Center.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(Center));
