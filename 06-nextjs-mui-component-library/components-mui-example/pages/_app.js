// import the font.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "@/styles/globals.css";

// import the ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
// import our theme
import { theme } from '@/utils/theme/config'


export default function App({ Component, pageProps }) {
  // wrap our application in the theme provider and our custom theme
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />;
  </ThemeProvider>

}
