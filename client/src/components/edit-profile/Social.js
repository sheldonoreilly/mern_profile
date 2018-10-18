import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiTwitterCircle } from '@mdi/js';
import { mdiGithubCircle } from '@mdi/js';
import { mdiLinkedinBox } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {},
  socialmedialink: {
    margin: theme.spacing.unit * 1
  }
});

const Social = props => {
  const { classes } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl className={classes.socialmedialink}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon path={mdiGithubCircle} size={1} horizontal vertical />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.socialmedialink}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon path={mdiLinkedinBox} size={1} horizontal vertical />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.socialmedialink}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon path={mdiFacebook} size={1} horizontal vertical />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.socialmedialink}>
        <Input
          onChange={props.twitterChange('twitter')}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon path={mdiTwitterCircle} size={1} horizontal vertical />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

Social.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Social);
