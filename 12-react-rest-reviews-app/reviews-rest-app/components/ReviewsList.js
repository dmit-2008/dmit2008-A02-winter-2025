import ReviewCard from "./ReviewCard"


// as an note we're passing down loadReviews and setReviews/reviews
// to this component but we're not using it in this component.
// this is call prop drilling and isn't the best.
// we're goin to learn about the context api later in the course
// and that's going to really help create state that is shared
// across components.
export default function ReviewsList({
  reviews,
  // if using option 2
  loadReviews,
  // if you're suing option 1
  reviews,
  setReviews
}) {

  // Remember that for a component you can only return
  // a single jsx node.
  // to make this a jsx we're going to talk about fragments (<> </>)
  // which essentially a ghost node (it exists in jsx but not
  // in html.)
  return <>
    {reviews.map((adaptation, index)=> {
      // we need to add the key to the ReviewCard
      // because we're looping it in JSX
      // we need to uniquely identify it
      // so we'll use the adaptation.id
      return <ReviewCard
        key={adaptation.id}
        id={adaptation.id}
        title={adaptation.title}
        rating={adaptation.rating}
        comment={adaptation.comment}
        loadReviews={loadReviews}
      />
    })}
  </>


}