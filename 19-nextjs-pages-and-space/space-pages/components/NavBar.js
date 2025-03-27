// to build static links we need next/link
import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

// build those static routes.

export default function NavBar(props) {
  return <AppBar position="static">
    <Toolbar>
      {/* route to the index. */}

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="/">
          Space Agency App
        </Link>
      </Typography>
      {/* route to the about page. */}
      <Typography variant="h6" component="div" >
        <Link href="/about">
          About Us
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
}
