// I want you to create this.

export default function ReviewsList({

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