// I want you to create a component called the same as the file.
// with a prop called title
// I want to use an app bar from mui
// export and use it in the index.js
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar({title}) {
  return <AppBar>
    <Toolbar>
      {/*
        the sx prop allows us to style
        the component in a one off way
      */}
      <Typography
        variant="h6"
        component="div"
        sx={{flexGrow: 1}}
      >
        {/* using the prop defined above */}
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
}