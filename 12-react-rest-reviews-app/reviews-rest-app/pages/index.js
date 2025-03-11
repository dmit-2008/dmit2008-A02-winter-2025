import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Container from '@mui/material/Container';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';

import Navbar from '../components/Navbar';
import NewReviewForm from '../components/NewReviewForm';

import { getReviews, postReview, deleteReview } from '../utils/api/reviews';

const MOCK_ADAPTATION_RATING = [{
  'title': 'Fight Club',
  'comment': 'Great movie and book',
  'rating': 10
}]

const BASE_URL = "http://localhost:5000"

export default function Home() {
  // I want you to create the stateful values we discussed
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  // take a look the radio group we're going to
  // initialize at "1" so it can be controlled
  const [rating, setRating] = useState("1")

  // make the reviews stateful
  const [reviews, setReviews] = useState(MOCK_ADAPTATION_RATING)

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

  // handle the form submission
  const handleForm = async (event) => {
    event.preventDefault()
    // validate so the input fields aren't empty.
    if (title.trim() === "" || comments.trim() === "") {
      // either one is empty we don't want to make the request
      // so the function ends here.
      return
    }


    // wrap this in a try catch.
    try {

      const newReview = await postReview({
        title: title,
        comments: comments,
        rating: rating
      })

      console.log(newReview)

      // after this we'll discuss state updates.
      // Option 1: From our understanding of state
      // updating the frontend stateful value
      // setting reviews to a new array with the old values
      // spread and the newReview in there.
      // setReviews([...reviews, newReview])

      // Option 2: cache clearing lite (calling loadReviews again)
      // just call the function loadReviews, and this will make
      // a separate api call to get the data from the endpoint that
      // we've just changed (a lot of the time the post request above
      // is considere a mutation).
      await loadReviews() // we're not using any returned values.
      // clear the inputs.
      resetForm()
    } catch (error) {
      console.error(error)
      // handle and display somethign to the user here.

    }


  }

  const resetForm = () => {
    setComments("")
    setTitle("")
    setRating("1")
  }

  // I want you to look up the card documentation
  // to add a delete button on the card itself
  const removeReview = async (id) => {
    console.log("removeReview, id: ", id)
    // implement this remove review
    // refresh the frontend.

    // let's create the url for the delete request.
    const DELETE_URL = `${BASE_URL}/reviews/${id}`
    // showing the url to yourself will save you
    // a lot of time
    console.log(DELETE_URL)
    // we can wrap in a try catch
    try {
      // in a try catch you'are attempting
      // the code below but it might error out.
      // you use this technique when dealing
      // with external data that's not guaranteed.
      await deleteReview(id)
      // handling the "not found case"
      // if (!response.ok) {
      //   throw Error("Not found.")
      // }

      // after this is complete I want you folks
      // to refresh the frontend
      // Option 1 (similar to refreshin in post)
      // create and filter the reviews to remove
      // the item with that id.
      // let newAllReviews = reviews.filter((review)=> {
      //   // keep all ids that isn't the one we're deleting
      //   return review.id !== id
      // })
      // setReviews(newAllReviews)
      // Option 2: Refresh all of the data.
      await loadReviews()
      // I want you to think about react query
      // when using option 2, go explore!
    } catch (error) {
      // you want to display this to the user
      // we'll be talk about this late in the
      // semester when talking about snackbars/
      // toast messages.
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
          {reviews.map((adaptation, index)=> {
            return <Card
              sx={{marginTop: 2}}
              key={index}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {adaptation.rating}
                  </Avatar>
                }
                action={
                  // make a online function that uses the
                  // adataptation.id to pass in.
                  <IconButton
                    onClick={
                      ()=> {removeReview(adaptation.id)}
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" color="text.secondary">
                    {adaptation.title}
                  </Typography>
                }

              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {adaptation.comment}
                </Typography>
              </CardContent>
            </Card>
          })}

        </Container>
      </main>
    </div>
  )
}
