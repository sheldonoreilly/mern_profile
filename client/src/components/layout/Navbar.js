import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { logUserOut } from '../../actions/authActions';
//react-redux
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Navbar extends Component {
  logOut = e => {
    // e.preventDefault();
    this.props.logUserOut();
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}>
              Dispatch
            </Typography>
            <Button color="inherit" component={Link} to="/browse">
              Browse
            </Button>
            <Button color="inherit" component={Link} to="/signin">
              Login
            </Button>
            <Button color="inherit" component={Link} to="register">
              Sign Up
            </Button>
            <Button onClick={this.logOut} color="inherit">
              {/* add the avatar */}
              Logout
            </Button>
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
  { logUserOut }
)(withStyles(styles)(Navbar));
