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
    // we're going to pass in the search query
    const data = await getAgencies({search: searchQuery})
    // console.log(data)
    // set the agencies and loading to false.
    setAgencies(data)
    setIsLoading(false)
  }

  // we're going to create an update of the text field
  // which will do two things first is update the state like we have in the past
  // but the second is update the query params of the url without refreshing the page
  const updateSearchQuery = (event) => {
    // update the state
    setSearchQuery(event.target.value)
    // I want to update the search query params
    // we're going to do this with router.replace
    // which is like push except it doesn't add to the
    // history stack
    router.replace({
      pathname: router.pathname, // the same path to the url
      query: {
        ...router.query, // spread existing queryparameters if i have them
        q: event.target.value
      }
    },
    undefined, // we're not updating the page so we're replacing the url.
    {shallow: true} // this will not force a page refresh
    )
  }
  // Notes on search:
  // 1. normally this is where you're going to use a technique called debouncing
  // which instead of firing every key stroke it'll fire every few ms.
  // 2. rule of thumb most search engines start to search after three characters
  // are entered.


  // use an effect on mount
  useEffect(()=> {
    // guard against router not being ready
    if (!router.isReady) {
      return
    }
    loadAgencies()
  }, [searchQuery, router.isReady])
  // we're going to change so that it listens to the search query and the router
  // is ready changes


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
              onChange={updateSearchQuery}
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
