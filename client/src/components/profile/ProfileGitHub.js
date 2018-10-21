import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import GitHubRepo from './GitHubRepo';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  sectionheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 4
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 'd56af55cab524c6fed8e',
      //sor this will be removed and refreshed before production
      clientSecret: 'e520d4bd4c66aff447c55be7b946cf41ecd96697',
      count: 5,
      sort: 'created: asc',
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        //if (this.refs.myRef) {
        this.setState({ repos: data });
        //}
      })
      //sor no alert
      .catch(err => alert(err));
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={22} className={classes.paper}>
        <Typography
          variant="headline"
          align="center"
          className={classes.sectionheader}>
          {'Latest GitHub Repos'}
        </Typography>
        {this.generateRepoCards()}
      </Paper>
    );
  }

  generateRepoCards = () => {
    const { repos } = this.state;
    const repoCards = repos.map((repo, index) => {
      return <GitHubRepo repo={repo} />;
    });
    return repoCards;
  };
}

ProfileGithub.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

export default withStyles(styles)(ProfileGithub);
