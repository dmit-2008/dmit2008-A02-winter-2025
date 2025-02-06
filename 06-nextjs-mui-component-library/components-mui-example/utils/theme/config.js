// import the createTheme
import { createTheme } from '@mui/material/styles';

// modify the options in our theme
const themeOptions = {
  palette: {
    primary: {
      main: '#432702',
    },
    secondary: {
      main: '#920340',
    },
  },
  typography: {
    fontSize: 20,
  },
}

// create theme
const theme = createTheme(themeOptions)

// export it.
export { theme }
