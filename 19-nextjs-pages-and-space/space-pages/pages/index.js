// we're going import useEffect and useState
// so that we can fetch things.
import {useEffect, useState} from 'react'

// we're going to need the router to get the query params
import {useRouter} from 'next/router'

import Head from 'next/head'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AgencyCard from '@components/AgencyCard';
import NavBar from '@components/NavBar';

// import my get agencies
import { getAgencies } from '@utils/api/agencies';

export default function Home() {
  // initialize the router
  const router = useRouter()

  // create some state here so that I can update the textfield
  const [searchQuery, setSearchQuery] = useState("")


  // create our stateful values to fetch
  const [agencies, setAgencies] = useState() // undefined for now
  // I'm going to set the default of loading to true
  // because we're going to fetch on mount.
  const [isLoading, setIsLoading] = useState(true)

  // we're going create our loading of the agencies
  const loadAgencies = async () => {
    // fetch the data
    const data = await getAgencies()
    // console.log(data)
    // set the agencies and loading to false.
    setAgencies(data)
    setIsLoading(false)
  }

  // use an effect on mount
  useEffect(()=> {
    loadAgencies()
  }, []) // on mount

  // we're going to do something different.
  // we're going to make an effect that will trigger once the router is ready.
  // when and only when the router is ready we're going to read the query param
  // of q and set it to the search query
  useEffect(()=> {
    // observe the change in the query parameter of q
    console.log(router.query.q)
    console.log(router.isReady)
    // guard if the router isn't ready
    if (!router.isReady) {
      return
    }
    // if there's no q it'll just set the search query to an empty string
    setSearchQuery(router.query.q || "")

  }, [router.isReady]) // listen to the changes in the router


  // let's handle the loading state
  if (isLoading) {
    return <>Loading...</>
  }
  // agencies will be populated

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
            Space Agencies
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              variant='outlined'
              label='search agency'
              fullWidth
              value={searchQuery}
            />

            {/* We're going to loop through the data */
            agencies.results.map((agency)=> {
              return <AgencyCard
                key={agency.id}
                // the ? image just checks if there is an image.
                imageUrl={agency.image?.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
                // we're also going to pass down the id to
                // our component so that it can use it to navigate
                id={agency.id}
              />
            })}

          </Box>
        </Container>

    </div>
  )
}
