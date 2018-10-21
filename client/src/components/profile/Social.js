import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiTwitterCircle } from '@mdi/js';
import { mdiGithubCircle } from '@mdi/js';
import { mdiLinkedinBox } from '@mdi/js';
import { mdiWeb } from '@mdi/js';
import withStyles from '@material-ui/core/styles/withStyles';
import isEmpty from '../../validation/is-empty';

const styles = theme => ({
  root: {},
  socialmedialink: {
    margin: theme.spacing.unit * 1
  },
  socialicon: {
    //color: theme.palette.primary.contrastText
    color: 'red'
  }
});

const Social = props => {
  const { personal, github, twitter, linkedIn, classes } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
      <p>
        {isEmpty(personal) ? null : (
          <a
            className="text-white p-2"
            href={'https://www.w3schools.com'}
            target="_blank">
            <Icon path={mdiWeb} size={1.5} horizontal vertical />
          </a>
        )}
      </p>
      <p>
        {isEmpty(twitter) ? null : (
          <a href={twitter} target="_blank">
            <Icon path={mdiTwitterCircle} size={1.5} horizontal vertical />
          </a>
        )}
      </p>
      <p>
        {isEmpty(linkedIn) ? null : (
          <a href={linkedIn} target="_blank">
            <Icon
              // color="#7ca57c"
              path={mdiLinkedinBox}
              size={1.5}
              horizontal
              vertical
            />
          </a>
        )}
      </p>
      <p>
        {isEmpty(github) ? null : (
          <a href={github} target="_blank">
            <Icon path={mdiGithubCircle} size={1.5} horizontal vertical />
          </a>
        )}
      </p>
    </div>
  );
};

Social.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Social);
