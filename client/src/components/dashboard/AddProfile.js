import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Button component={Link} to="/createprofile">
      Add Profile
    </Button>
  );
};
