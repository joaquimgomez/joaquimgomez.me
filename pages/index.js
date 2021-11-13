import React, { useCallback } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, useScrollTrigger, Container, useTheme } from '@material-ui/core'
import { Brightness3, Brightness7 } from '@material-ui/icons'
import { darkTheme, lightTheme } from '../src/theme';
import { name } from '../data.json';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Education from '../src/Education';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: 'none'
  },
  body: {
    marginLeft: 180,
    marginRight: 180
  }
}));

export default function Index({ setTheme }) {

  const classes = useStyles();

  const theme = useTheme()

  const trigger = useScrollTrigger({ disableHysteresis: true })

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
  }, [setTheme])

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color={!trigger ? "transparent" : "inherit"} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            { name }
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            { theme.palette.type === 'dark' ? <Brightness3 /> : <Brightness7 /> }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.body}>
        <Landing />
        {/*<Skills />
        <Education />*/}
      </Container>
    </div>
  )
}
