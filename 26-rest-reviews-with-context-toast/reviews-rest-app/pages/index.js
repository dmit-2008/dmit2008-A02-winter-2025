// import useContext from react
import {useState, useEffect, useContext} from 'react'

import Container from '@mui/material/Container';

import AdaptationReviewList from '../components/AdapatationReviewList';
import AdaptationReviewForm from '../components/AdaptationReviewForm';
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'

// we're going to import AppNotificationContext
import {
  AppNotificationContext,
  useNotification

} from '../components/context/AppNotification';

import { getReviews } from '../utils/api/reviews'

export default function Home() {
  const [reviews, setReviews] = useState([])
  // the same way we have reviews we're going to use context
  // the old way of using the context
  const {show} = useContext(AppNotificationContext)
  // the exact same as above except we are
  // using our own hook
  const notification = useNotification()


  useEffect(()=> {
    loadAllReviews()
  }, [])

  const removeReview = (id) => {
    let currentReviews = reviews.filter((review)=> {
      return review.id !== id
    })
    setReviews(currentReviews)
  }

  const loadAllReviews = () => {
    // to get some practice what we're going to do is
    // we're going to display a message that our
    // reviews were fetch successfully.

    getReviews().then((data)=> {
      setReviews(data)
      // we can just use show as a oneline
      notification.show({
        message: "Reviews loaded successfully",
        type: "info"
      })
    })
  }

  return <>
    <SEO />
    <NavBar title={'Adaptation Reviews'} />
    <Container
      sx={{
        pt: 2,
        pb: 2,
      }}
      maxWidth="md"
      component="main"
    >
      <AdaptationReviewForm
        reviews={reviews}
        setReviews={setReviews}
      />
      <AdaptationReviewList
        reviews={reviews}
        removeReview={removeReview}
      />
    </Container>
  </>
}
