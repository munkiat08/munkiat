import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import LinkButton from './component/LinkButton';
import MainCard from './component/MainCard';
import ProfileText from './component/ProfileText';
import WorkExpansion from './component/WorkExpansion';
import SkillCard from './component/SkillCard';

import link from './data/link';
import profile from './data/profile';
import work from './data/work';
import skill from './data/skill';

function App() {
  return (<> 
   <AppBar position="sticky">
    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h5" className="nav-title">
          Chai Mun Kiat
        </Typography>
        {link.map((item, key) =>
          <LinkButton {...item} key={key} />
        )}
      </Toolbar>
    </Container>
  </AppBar>
  <Container maxWidth="lg" className="container-footer">
    <MainCard id="profile" children={
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item sm={3}>
          <Avatar alt="Profile" src={require('./image/profile.jpg')}/>
        </Grid>
        <Grid item sm={9}>
          <Paper className="profile-card">
            <ProfileText variant="h5" content="Hello! I’m MK" />
            <ProfileText content="Experienced Web Application Developer with strong technical and interpersonal skill" />
            <ProfileText content="Able concepts to code and improve system perfomance and user experience" />
          </Paper>
          <Paper className="profile-card margin-content">
            {profile.map((item, key) =>
              <ProfileText {...item} key={key} />
            )}
          </Paper>
        </Grid>
      </Grid>
    } />
    <MainCard id="work" children={
        <>
        {work.map((item, key) =>
          <WorkExpansion {...item} key={key} />
        )}
        </>
    } />
    <MainCard id="skill" children={
      <Grid container spacing={3} direction="row">
        {skill.map((item, key) =>
          <Grid item sm={4} key={key}>
            <SkillCard {...item} />
          </Grid>
        )}
      </Grid>
    } />
  </Container>
  <AppBar position="fixed" className="footer">
    <Typography className="w100 margin-auto">
      Created by CHAI MUN KIAT, using React and Material UI
    </Typography>
  </AppBar>
</ >);
}

export default App;
