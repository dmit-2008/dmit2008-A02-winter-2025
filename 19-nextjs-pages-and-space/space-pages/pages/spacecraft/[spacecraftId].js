import Head from 'next/head'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import NavBar from '@components/NavBar';

export default function SpaceCraft() {

  return (
    <div>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
          </Typography>
          <Typography variant="p">

          </Typography>
        </Container>

    </div>
  )
}
