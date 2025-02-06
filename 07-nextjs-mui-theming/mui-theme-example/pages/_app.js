import '../styles/globals.css'

// normally you keep the css at the top on its' own.
import {  ThemeProvider } from '@mui/material/styles';
// import our theme
import { theme } from '../utils/theme/config';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
