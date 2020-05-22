import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0E90CE'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        '&.nav-btn': {
          color: 'white'
        }
      }
    },
    MuiGrid: {
      root: {
        width: '100%'
      }
    },
    MuiAvatar: {
      root: {
        height: '100%',
        width: '100%'
      }
    },
    MuiPaper: {
      root: {
        '&.profile-card': {
          padding: '10px',
          color: '#a2826f'
        },
        '&.margin-content': {
          marginTop: '24px'
        }
      }
    },
    MuiExpansionPanel: {
      root: {
        '&.work-card': {
          color: '#a2826f',
          textAlign: 'center'
        }
      }
    },
    MuiCard: {
      root: {
        '&.skill-card': {
          backgroundColor: '#ffffff',
          width: '100%',
          color: '#a2826f',
          '& .skill-header': {
            fontWieght: 'bold'
          },
          '& .skill-content': {
            textAlign: 'left'
          },
          '& .skill-progress': {
            height: '10px'
          }
        },
        '&.main-card': {
          marginTop: '48px',
          '& .main-card-header': {
            padding: '8px',
            backgroundColor: '#f30623'
          },
          '& .main-card-content': {
            backgroundColor: '#0E90CE',
            padding: '16px',
            color: '#a2826f'
          }
        }
      }
    },
    MuiTypography: {
      root: {
        '&.w100': {
          width: '100%'
        },
        '&.margin-text': {
          marginLeft: '8px',
          marginRight: '8px'
        },
        '&.margin-auto': {
          margin: 'auto'
        },
        '&.nav-title': {
          flexGrow: '1'
        }
      }
    },
    MuiContainer: {
      root: {
        '&.container-footer': {
          paddingBottom: '75px'
        }
      }
    },
    MuiAppBar: {
      root: {
        '&.footer': {
          top: 'auto',
          bottom: 0,
          textAlign: 'center',
          height: '50px'
        }
      }
    }
  }
});

export default theme;