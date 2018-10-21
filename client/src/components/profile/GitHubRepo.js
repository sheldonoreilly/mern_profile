import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

// theme.typography.pxToRem
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
    fontSize: theme.spacing.unit * 2,
    textDecoration: 'none'
  },
  cardsubtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: (theme.typography.fontSize = theme.typography.pxToRem(15))
  },
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

const GitHubRepo = props => {
  const { classes, repo } = props;
  return (
    <Paper elevation={22} className={classes.paper}>
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <div style={{ display: 'flex' }}>
            <Typography className={classes.cardtitle}>
              <Link
                to={repo.html_url}
                style={{ textDecoration: 'none' }}
                target="_blank">
                {`sheldonoreilly/${repo.name}`}
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
                color="primary"
              />
            </div>
          </div>
          <Typography className={classes.cardsubtitle}>
            {repo.description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
GitHubRepo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(GitHubRepo);
