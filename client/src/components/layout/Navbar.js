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
import Switch from '@material-ui/core/Switch';
//react-redux
import { connect } from 'react-redux';

const styles = theme => ({
  // root: {
  //   flexGrow: 1
  // },
  grow: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    textDecoration: 'none'
  },
  gravtar: {
    borderRadius: '50%',
    width: '25px'
  },
  buttons: {
    padding: theme.spacing.unit
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
    //sor why prevent
    // e.preventDefault();
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
              className={classes.grow}
              color="inherit"
              variant="title"
              component={Link}
              to="/signin">
              Dispatch
            </Typography>

            <Switch
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
            />
            <Button
              className={classes.buttons}
              color="inherit"
              component={Link}
              to="/browse">
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
                <Button
                  className={classes.buttons}
                  style={{ marginRight: '24px' }}
                  color="inherit"
                  component={Link}
                  to="/profile">
                  View Me
                </Button>
                (/* //sor */}
                {/* <Link to={`/profile/${props.profile.handle}`}>View Profile</Link>                                                                                                                    */}
                <img
                  className={classes.gravtar}
                  src={user.avatar}
                  alt={user.name}
                  style={{ width: '25px', marginRight: '5px' }}
                  title="You must have a Gravatar connected to your email to display an image"
                />{' '}
                <Button
                  style={{ padding: 0 }}
                  onClick={this.logOut}
                  color="inherit">
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
