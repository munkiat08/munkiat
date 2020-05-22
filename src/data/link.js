import React from 'react';

import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';

export default [
  {
    link: '#profile',
    content: 'Profile',
    children: <AccountCircleRoundedIcon/>
  },
  {
    link: '#work',
    content: 'Work',
    children: <WorkRoundedIcon/>
  },
  {
    link: '#skill',
    content: 'Skill',
    children: <BuildRoundedIcon/>
  }
]