import React, { useCallback } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, useScrollTrigger, Container, useTheme } from '@material-ui/core'
import { Brightness3, WbSunny } from '@material-ui/icons'
import { darkTheme, lightTheme } from '../src/theme';
import { name, projects } from '../data.json';
import axios from 'axios';
import About from '../src/About';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Education from '../src/Education';
import Footer from '../src/Footer';
import Projects from '../src/Projects';

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

export async function getStaticProps() {
  const baseURI = projects.baseURI
  
  const repositories = projects.repositories
  
  const headers = {
    headers: { 
      'Authorization': `token ${process.env.GITHUB}`
    }
  }
  
  const gitHubRepositories = await Promise.allSettled(
    repositories.map(
      async name => {
        const repository = await axios.get(`${baseURI}/${name}`, headers).then(res => res.data);
        const langs = await axios.get(`${baseURI}/${name}/languages`, headers).then(res => res.data)
        return {
          ...repository,
          languages: Object.getOwnPropertyNames(langs)
        };
      }
    )
  );

  return {
    props: {
      projects: gitHubRepositories
    },
    revalidate: 60
  }
}

export default function Index({ projects, setTheme }) {

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
            { theme.palette.type === 'dark' ? <Brightness3 /> : <WbSunny /> }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.body}>
        <Landing />
        <About />
        <Skills />
        <Education />
        <Projects projects={projects} />
      </Container>
      <Footer />
    </div>
  )
}
