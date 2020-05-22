import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01aef0'
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
          color: '#966f62'
        },
        '&.margin-content': {
          marginTop: '24px'
        }
      }
    },
    MuiExpansionPanel: {
      root: {
        '&.work-card': {
          color: '#966f62',
          textAlign: 'center'
        }
      }
    },
    MuiCard: {
      root: {
        '&.skill-card': {
          backgroundColor: '#ffffff',
          width: '100%',
          color: '#966f62',
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
            backgroundColor: '#f32446'
          },
          '& .main-card-content': {
            backgroundColor: '#01aef0',
            padding: '16px',
            color: '#966f62'
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
      },
      colorPrimary: {
        color: 'white'
      }
    }
  }
});

export default theme;