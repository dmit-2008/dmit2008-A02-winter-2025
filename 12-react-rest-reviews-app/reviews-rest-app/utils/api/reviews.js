// I want to group all of the api calls
// in this file

const BASE_URL = "http://localhost:5000"
// create a function getReviews
// that's going to make the api call
// and return the data.
// use it index.js as well.


const getReviews = async () => {
  const REVIEWS_URL = `${BASE_URL}/reviews`
  const response = await fetch(REVIEWS_URL)
  const data = await response.json()
  return data
}

// do the post and use it in the index.js
const postReview = async ({
  title, comments, rating
}) => {
  // make your try catches as close to the frontend as possible.
  // you want to handle the errors based on when
  // this will fail if it will.

  // make the post request to the backend
  const response = await fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // just part of making fetch requests.
    },
    body: JSON.stringify({
      title: title,
      comment: comments,
      rating: parseInt(rating)
      // Note on rating this will work if you don't parse the int
      // but this is only because we're using json-server
      // on a "real" backend it would be rejected if you don't use the right type.
    })
  })
  const newReview = await response.json()
  return newReview
}



export { getReviews, postReview }