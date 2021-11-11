import React, { useCallback } from 'react';
import { Container, useTheme } from '@material-ui/core'
import { darkTheme, lightTheme } from '../src/theme';
import Landing from '../src/Landing'

export default function Index({ setTheme }) {

  const theme = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
  }, [setTheme])

  return (
    <Container>
      <Landing />
    </Container>
  )
}
