import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import { darkTheme, lightTheme } from '../src/theme';

export default function MyApp({ Component, pageProps }) {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(
    prefersDarkMode ? darkTheme : lightTheme
  )

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme)
  }, [prefersDarkMode])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Joa(quim) Gómez</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon/icons8-circulado-j-16.png"/>
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon/icons8-circulado-j-32.png"/>
        <link rel="shortcut icon" type="image/png" sizes="57x57" href="/favicon/icons8-circulado-j-57.png"/>
        <link rel="shortcut icon" type="image/png" sizes="60x60" href="/favicon/icons8-circulado-j-60.png"/>
        <link rel="shortcut icon" type="image/png" sizes="70x70" href="/favicon/icons8-circulado-j-70.png"/>
        <link rel="shortcut icon" type="image/png" sizes="72x72" href="/favicon/icons8-circulado-j-72.png"/>
        <link rel="shortcut icon" type="image/png" sizes="76x76" href="/favicon/icons8-circulado-j-76.png"/>
        <link rel="shortcut icon" type="image/png" sizes="96x96" href="/favicon/icons8-circulado-j-96.png"/>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} setTheme={setTheme}/>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};