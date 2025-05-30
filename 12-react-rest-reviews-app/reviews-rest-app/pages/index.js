import { useState } from 'react'
import Head from 'next/head'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Navbar from '../components/Navbar';
import NewReviewForm from '../components/NewReviewForm';
import ReviewsList from '../components/ReviewsList';

import { getReviews } from '../utils/api/reviews';

export default function Home() {
  // I want you to create the stateful values we discussed
  // make the reviews stateful
  const [reviews, setReviews] = useState([])

  // I want you to make all of these inputs controlled.
  // I want you to create function that fetches the data
  // updates the 'reviews' stateful value

  // if you folks can make a function
  // call the backend api (it's on a different domain)
  // update the state of reviews.
  const loadReviews = async () => {
    // you can use try catch when you are trying to access
    // something outside of the application this would files/rest apis/network call.
    try {
      // making the fetch request to the backend
      // it's on a different domain, so you need to specify the domain.
      const data = await getReviews()
      // to update the state of the page
      setReviews(data)
    } catch (error) {
      // we're going to show later on a strategy of how to
      // display this error as a toast message.
      console.log(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container maxWidth="md">
          <NewReviewForm
            loadReviews={loadReviews}
          />
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={loadReviews}
            >
              Load All Current Reviews
            </Button>
          </Box>
          <ReviewsList
            reviews={reviews}
            loadReviews={loadReviews}
          />

        </Container>
      </main>
    </div>
  )
}
