import { useState } from 'react'

import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Grid from '@mui/material/Grid';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import TextField from '@mui/material/TextField';


import { postReview } from '../utils/api/reviews'

// depending on the way that I'm going to
// refresh the frontend data I'm going to
// pass down different props.
export default function NewReviewForm({
  // if using option 2
  loadReviews,
  // if you're suing option 1
  reviews,
  setReviews
}) {
  // we're going to move the state to the
  // form because it's the form alone that is
  // using these stateful values
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  // take a look the radio group we're going to
  // initialize at "1" so it can be controlled
  const [rating, setRating] = useState("1")

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

  return <form
    onSubmit={handleForm}
  >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <TextField
          id="title"
          name="title"
          label="Adaptation Title"
          fullWidth
          variant="standard"
          value={title}
          onChange={(event)=> {
            setTitle(event.target.value)
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="review-comments"
          name="review-comments"
          label="Comments"
          fullWidth
          variant="standard"
          value={comments}
          onChange={(event)=> {
            setComments(event.target.value)
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl>
          <FormLabel id="adaptation-rating">Rating</FormLabel>
          <RadioGroup
            row
            aria-labelledby="adaptation-rating"
            name="rating-buttons-group"
            value={rating}
            onChange={(event)=> {
              setRating(event.target.value)
            }}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
            <FormControlLabel value="6" control={<Radio />} label="6" />
            <FormControlLabel value="7" control={<Radio />} label="7" />
            <FormControlLabel value="8" control={<Radio />} label="8" />
            <FormControlLabel value="9" control={<Radio />} label="9" />
            <FormControlLabel value="10" control={<Radio />} label="10" />
          </RadioGroup>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          type="submit"
        >
          Add New Review
        </Button>
      </Grid>
    </Grid>
  </form>
}