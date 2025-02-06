// import create theme
import { createTheme } from '@mui/material/styles';

// create our themeOptions
const themeOptions = {
  typography: {
    h2: {
      fontSize: '5.2rem',
      fontWeight: 800,
    },
  }
}

// create the theme from themoptions
const theme = createTheme(themeOptions)

// export it.
export { theme }
