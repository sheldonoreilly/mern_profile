import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import StarRate from '@material-ui/icons/StarRate';

const styles = theme => ({
  root: {},
  card: {
    display: 'flex'
  },
  cardcontent: {
    width: '100%',
    display: 'block'
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(25))
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(20))
  },
  chip: {
    margin: theme.spacing.unit
    // flexGrow: 1
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
    console.log('componentDidMount');
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;
    const url = `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`;

    console.log('url for github is :', url);
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        console.log('The data return from the repo promise :', data);
        //if (this.refs.myRef) {
        this.setState({ repos: data });
        //}
      })
      //sor no alert
      .catch(err => alert(err));
  }
  render() {
    console.log('RENDER this.state.repos.length :', this.state.repos.length);
    return <Paper>{this.generateRepoCards()}</Paper>;
  }

  generateRepoCards = () => {
    const { classes } = this.props;
    const { repos } = this.state;

    console.log('this.state.repos.length :', repos.length);

    const repoCards = repos.map(repo => {
      return (
        <Card className={classes.card} key={repo.id}>
          <CardContent className={classes.cardcontent}>
            <div style={{ display: 'flex' }}>
              <Typography className={classes.cardtitle}>
                <Link to={repo.html_url} className="text-info" target="_blank">
                  {repo.name}
                </Link>
              </Typography>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}>
                <Chip
                  label={`Watches: ${repo.watchers_count}`}
                  className={classes.chip}
                />
                <Chip
                  label={`Stars: ${repo.stargazers_count}`}
                  className={classes.chip}
                />
                <Chip
                  label={`Forks: ${repo.forks_count}`}
                  className={classes.chip}
                />
              </div>
            </div>
            <Typography className={classes.cardsubtitle}>
              {repo.description}
            </Typography>
          </CardContent>
        </Card>
      );
    });
    console.log('repoCards :', repoCards);
    return repoCards;
  };
}

ProfileGithub.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

export default withStyles(styles)(ProfileGithub);
