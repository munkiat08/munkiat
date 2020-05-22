import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';

function WorkExpansion(props) {
  return (
    <ExpansionPanel className="work-card">
      <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography className="w100">{props.dates}</Typography>
        <Typography className="w100">{props.company}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className="w100" component="div">
          {props.description.split('\n').map((text, key) => <div key={key}>{text}</div>)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default WorkExpansion;