import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { logUserOut } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
//react-redux
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20
  // }
});

class Navbar extends Component {
  logOut = e => {
    //sor why prevent
    // e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logUserOut();
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}>
              Dispatch
            </Typography>
            <Button color="inherit" component={Link} to="/browse">
              View All
            </Button>

            {!isAuthenticated ? (
              <Fragment>
                <Button color="inherit" component={Link} to="/signin">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="register">
                  Sign Up
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/profile">
                  View Me
                </Button>
                <Button onClick={this.logOut} color="inherit">
                  {/* add the avatar */}
                  Logout
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logUserOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logUserOut, clearCurrentProfile }
)(withStyles(styles)(Navbar));
