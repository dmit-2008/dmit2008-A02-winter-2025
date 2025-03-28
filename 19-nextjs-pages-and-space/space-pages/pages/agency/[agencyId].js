import {useRouter} from 'next/router'

import Head from 'next/head'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavBar from '@components/NavBar';

/*
This file is going to be using the url path /agency/whateveridnumber
beacuse our file path in pages is /agency/[agencyId].js
What we'll do is we'll use the router to use the agencyId from
router.query to display it.
*/
export default function Agency() {
  const router = useRouter()

  // get the agencyId (again look at the file name)
  const { agencyId } = router.query

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
            {/* Display the agency */}
            Agency: { agencyId }
          </Typography>
          <Typography variant="p">
            This is a dynamic page.
          </Typography>
          <ul>

          {/* see all query params */
          Object.keys(router.query).map((param, index)=> {
            return <li key={index}>{param}, value: {router.query[param]}</li>
          })}
          </ul>
        </Container>

    </div>
  )
}
