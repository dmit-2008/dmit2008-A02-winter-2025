// same pattern as before
import {useRouter} from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import NavBar from '@components/NavBar';

export default function SpaceCraft() {
  // declare the router
  const router = useRouter()

  // get the spacecraftId remember look at
  // the filename with the name of the path
  // parameter inside of the [ ].
  const {spacecraftId} = router.query

  return (
    <div>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
            Spacecraft: {spacecraftId}
          </Typography>
          <Typography variant="p">
            We'll finish this next class.
          </Typography>
        </Container>

    </div>
  )
}
