import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

//divider
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {},
  paper: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 2
  },
  card: {
    display: 'flex'
  },
  cardcontent: {
    width: '100%',
    display: 'block'
  },
  cardtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(20)),
    textDecoration: 'none'
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(15))
  },
  chip: {
    margin: theme.spacing.unit
    // backgroundColor: 'green',
    // color: 'white'
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
        <Typography variant="headline" align="center">
          {'Latest GitHub Repos'}
        </Typography>
        {this.generateRepoCards()}
      </Paper>
    );
  }

  generateRepoCards = () => {
    const { classes } = this.props;
    const { repos } = this.state;
    const repoCards = repos.map((repo, index) => {
      return (
        <Fragment key={index}>
          <Paper elevation={22} className={classes.paper}>
            <Card className={classes.card}>
              <CardContent className={classes.cardcontent}>
                <div style={{ display: 'flex' }}>
                  <Typography className={classes.cardtitle}>
                    <Link
                      to={repo.html_url}
                      className="text-info"
                      style={{ textDecoration: 'none' }}
                      target="_blank">
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
                      color="primary"
                    />
                    <Chip
                      label={`Stars: ${repo.stargazers_count}`}
                      className={classes.chip}
                      color="primary"
                    />
                    <Chip
                      label={`Forks: ${repo.forks_count}`}
                      className={classes.chip}
                      color="secondary"
                    />
                  </div>
                </div>
                <Typography className={classes.cardsubtitle}>
                  {repo.description}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Fragment>
      );
    });
    return repoCards;
  };
}

ProfileGithub.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

export default withStyles(styles)(ProfileGithub);
