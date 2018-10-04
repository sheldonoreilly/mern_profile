import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Person from '@material-ui/icons/Person';
import School from '@material-ui/icons/School';
import Update from '@material-ui/icons/Update';
import CssBaseline from '@material-ui/core/CssBaseline';
//redux
import { connect } from 'react-redux';
//actions
import { getCurrentProfile } from '../../actions/profileActions';

import DataTable from './Table';

const styles = theme => ({
  root: {},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8
  }
});

class Dashboard extends Component {
  state = {
    value: ''
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Grid container className={classes.main_container}>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                variant="display3"
                style={{ marginBottom: 0, marginTop: '32px' }}>
                Dashboard
              </Typography>
              <Typography color="textSecondary" style={{ marginTop: 0 }}>
                Welcome, Sheldon O'Reilly
              </Typography>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justify: 'flex-start'
                }}>
                {/* <List component="nav"> */}
                <ListItem button disableGutters style={{ width: 'auto' }}>
                  <ListItemIcon style={{ marginRight: 4 }}>
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    primary="Edit Profile"
                    style={{ padding: '0px 12px 0px 0px' }}
                  />
                </ListItem>
                <ListItem button disableGutters style={{ width: 'auto' }}>
                  <ListItemIcon style={{ marginRight: 4 }}>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add Education"
                    style={{ padding: '0px 12px 0px 0px' }}
                  />
                </ListItem>
                <ListItem button disableGutters style={{ width: 'auto' }}>
                  <ListItemIcon style={{ marginRight: 4 }}>
                    <Update />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add Experience"
                    style={{ padding: '0px 12px 0px 0px', fontSize: '0.8rem' }}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Grid>

          <DataTable title={'Experience Credentials'} />
          <DataTable title={'Education Credentials'} />
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

// const mapStateToProps = state => {
//   {
//     profile: state.profile
//   }
// };

export default connect(
  null,
  { getCurrentProfile }
)(withStyles(styles)(Dashboard));
