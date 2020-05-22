import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

function LinkButton(props) {
  return (
    <Hidden xsDown>
      <Button className="nav-btn" href={props.link} >
        {props.children}
        <Typography className="margin-text">
          {props.content}
        </Typography>
      </Button>
    </Hidden>
  )
}

export default LinkButton;
