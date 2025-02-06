// I want you to create a component called the same as the file.
// with a prop called title
// I want to use an app bar from mui
// export and use it in the index.js
import AppBar from '@mui/material/AppBar';
// I want you folks to create a IconButton
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// to use Deblur icon as the button piece.
// on the left of the text.
import DeblurIcon from '@mui/icons-material/Deblur';
// @mui/icons-material is different than @mui/material we need to install it.



export default function Navbar({title}) {
  return <AppBar>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/* add our icon here */}
        <DeblurIcon />
      </IconButton>
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