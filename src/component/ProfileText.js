import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function ProfileText(props) {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      {props.children} 
      <Typography variant={props.variant} className="margin-text" component="div">
        {props.content.split('\n').map((text, key) => <div key={key}>{text}</div>)}
      </Typography>
    </Grid>
  )
}

export default ProfileText;
