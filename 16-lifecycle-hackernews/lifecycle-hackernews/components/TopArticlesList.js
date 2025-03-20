import { useState } from 'react'

export default function TopArticlesList() {
  // create a slice size
  const SLICE_SIZE = 5
  // create some state
    // allStoriesList
  const [allStoryIds, setAllStoryIds] = useState([])
    // slice (we're going to this bit more)
  const [slice, setSlice] = useState(1)


  // an effect
    // load all of the stories

  // jsx
    // a list of story components (we'll do that later)
    // an MUI button that will be hooked to a method which
    // will increase the slice by one.
  return <>



  </>
}