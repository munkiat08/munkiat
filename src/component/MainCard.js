import React from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';

function MainCard(props) {
  return (
    <Card id={props.id} className="main-card">
      <CardHeader className="main-card-header" />
      <CardContent className="main-card-content">
        {props.children}
      </CardContent>
    </Card>
  )
}

export default MainCard;