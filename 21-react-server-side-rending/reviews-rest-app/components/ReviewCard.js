import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteReview } from '../utils/api/reviews';

// what I want you to do
// bring in the card.
// create the component and use it in index.js

export default function ReviewCard({
  // destructure the adaptation
  rating, id, title, comment,
  // if using option 2
  loadReviews,
  // if you're suing option 1
  reviews,
  setReviews
}) {

// I want you to look up the card documentation
  // to add a delete button on the card itself
  const removeReview = async (id) => {
    console.log("removeReview, id: ", id)
    // implement this remove review
    // refresh the frontend.

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

  // remove the key attribute because we are going to
  // add it to the card in the list in the index.js.
  return <Card
    sx={{marginTop: 2}}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {rating}
        </Avatar>
      }
      action={
        // make a online function that uses the
        // adataptation.id to pass in.
        <IconButton
          onClick={
            ()=> {removeReview(id)}
          }
        >
          <DeleteIcon />
        </IconButton>
      }
      title={
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      }

    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {comment}
      </Typography>
    </CardContent>
  </Card>
}