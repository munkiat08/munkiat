import React from 'react';

import { LinearProgress, Typography, Card, CardHeader, CardContent } from '@material-ui/core';

function SkillItem(item, key) {
  return (
    <React.Fragment key={key}>
      <LinearProgress variant="determinate" className="skill-progress" value={item.rate * 10} />
      <Typography className="w100" variant="body1" paragraph>{item.name} ({item.rate} / 10)</Typography>
    </React.Fragment>
  );
}

function SkillCard(props) {
  return (
    <Card className="skill-card">
      <CardHeader className="skill-header" title={<Typography variant="h5" className="w100">{props.title}</Typography>}>
      </CardHeader>
      <CardContent className="skill-content">
        {props.skill.map((item, key) =>
          SkillItem(item, key)
        )}
      </CardContent>
    </Card>
  )
}

export default SkillCard;
