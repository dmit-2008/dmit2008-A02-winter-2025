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
            As challenge for next class I want you to update the api funciton to use the correct endpoint.
            I want you to fetch the data from the backend using the spacecraft id and the techniques discussed in class.
            I want you to show the data for:
            - landings
            - maiden flight
            - name
            - successful landings/launches
            - type
            - a link to the wiki article.
          </Typography>
        </Container>

    </div>
  )
}
