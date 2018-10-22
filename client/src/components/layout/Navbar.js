import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import Tooltip from '@material-ui/core/Tooltip';
import { mdiHome, mdiThemeLightDark } from '@mdi/js';

import { Link } from 'react-router-dom';
import { logUserOut } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
//react-redux
import { connect } from 'react-redux';

const styles = theme => ({
  //font specs especially for nav

  menubutton: {
    fontFamily: 'Roboto Slab',
    padding: theme.spacing.unit
  },
  logoutbuttonLeft: { margin: '0, 0, 24px, 0', padding: '0, 0, 0, 0' },
  themelink: {
    justifyContent: 'flex-start',

    marginRight: theme.spacing.unit * 3.5
  },
  applink: { flexGrow: 1 },
  home: {
    justifyContent: 'flex-start',
    textDecoration: 'none',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 3.5
  },
  gravtar: {
    width: '30px',
    borderRadius: '50%'
  }
});

class Navbar extends Component {
  state = {
    themeLight: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });

    this.props.themeHandler(this.state.checked);
  };
  logOut = e => {
    this.props.clearCurrentProfile();
    this.props.logUserOut();
  };

  setTheme = () => {
    this.props.themeHandler();
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/dashboard" className={classes.home}>
              <Tooltip title="Home">
                <Icon
                  path={mdiHome}
                  color="beige"
                  size={1.25}
                  horizontal
                  vertical
                />
              </Tooltip>
            </Link>
            <label className={classes.applink}>
              <Typography
                color="secondary"
                className={classes.layout}
                variant="title">
                Profiler
              </Typography>
            </label>
            <Button onClick={this.setTheme} className={classes.themelink}>
              <Tooltip title="Dark/Light Theme">
                <Icon
                  path={mdiThemeLightDark}
                  color="beige"
                  size={0.9}
                  horizontal
                  vertical
                />
              </Tooltip>
            </Button>

            <Tooltip title="Browse Profiles">
              <Button
                className={classes.menubutton}
                color="inherit"
                component={Link}
                to="/browse">
                Browse
              </Button>
            </Tooltip>
            {!isAuthenticated ? (
              <Fragment>
                <Tooltip title="Sign In">
                  <Button
                    className={classes.menubutton}
                    color="inherit"
                    component={Link}
                    to="/signin">
                    Sign In
                  </Button>
                </Tooltip>

                <Tooltip title="Register">
                  <Button
                    className={classes.menubutton}
                    color="inherit"
                    component={Link}
                    to="/register">
                    Sign Up
                  </Button>
                </Tooltip>
              </Fragment>
            ) : (
              <Fragment>
                <Tooltip title="Browse Profiles">
                  <Button
                    className={classes.menubutton}
                    color="inherit"
                    component={Link}
                    to="/profile">
                    Profile
                  </Button>
                </Tooltip>
                <Button
                  className={classes.menubutton}
                  // size="small"
                  onClick={this.logOut}
                  color="inherit">
                  Logout
                </Button>
                <span>
                  <img
                    className={classes.gravtar}
                    src={user.avatar}
                    alt={user.name}
                    title="You must have a Gravatar connected to your email to display an image"
                  />{' '}
                </span>
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
