import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiAccountDetails,
  mdiLogout,
  mdiThemeLightDark,
  mdiImageFilterBlackWhite,
  mdiSolid
} from '@mdi/js';

import { Link } from 'react-router-dom';
import { logUserOut } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import Switch from '@material-ui/core/Switch';
//react-redux
import { connect } from 'react-redux';

const styles = theme => ({
  //font specs especially for nav

  menubutton: {
    fontFamily: 'Roboto Slab',
    padding: theme.spacing.unit
  },
  logoutbuttonLeft: { margin: '0, 0, 24px, 0', padding: '0, 0, 0, 0' },
  themelink: { marginRight: '24px' },
  logo: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    textDecoration: 'none'
  },
  gravtar: {
    width: '30px',
    borderRadius: '50%'
  }
});

class Navbar extends Component {
  state = {
    checked: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });

    this.props.themeHandler(this.state.checked);
  };
  logOut = e => {
    this.props.clearCurrentProfile();
    this.props.logUserOut();
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.logo}
              color="inherit"
              variant="title"
              component={Link}
              to="/signin">
              Dispatch
            </Typography>

            {/* <Switch
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
            /> */}

            <Link
              component={Link}
              to="/browse"
              style={{ width: 'auto', padding: 0, marginRight: '60px' }}>
              <Icon
                path={mdiThemeLightDark}
                color="beige"
                size={1.5}
                horizontal
                vertical
              />
            </Link>

            <Link
              component={Link}
              to="/browse"
              style={{ width: 'auto', padding: 0 }}>
              <Icon
                path={mdiAccountDetails}
                color="beige"
                size={1.5}
                horizontal
                vertical
              />
            </Link>

            {!isAuthenticated ? (
              <Fragment>
                <Button
                  className={classes.menubutton}
                  color="inherit"
                  component={Link}
                  to="/signin">
                  Login
                </Button>
                <Button
                  className={classes.menubutton}
                  color="inherit"
                  component={Link}
                  to="register">
                  Sign Up
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Link
                  component={Link}
                  to="/profile"
                  style={{ width: 'auto', padding: 0, marginRight: '24px' }}>
                  <Icon
                    color="beige"
                    path={mdiAccount}
                    size={1.5}
                    horizontal
                    vertical
                  />
                </Link>
                {/* //sor */}
                {/* <Link to={`/profile/${props.profile.handle}`}>View Profile</Link>     */}
                <IconButton
                  className={classes.logoutbuttonLeft}
                  size="small"
                  onClick={this.logOut}
                  color="inherit">
                  {/* add the avatar */}
                  <Icon
                    color="beige"
                    path={mdiLogout}
                    size={1.5}
                    horizontal
                    vertical
                  />
                </IconButton>
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
