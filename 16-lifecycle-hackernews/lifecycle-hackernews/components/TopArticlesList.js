import { useState, useEffect } from 'react'

import Button from "@mui/material/Button"

// Import my new component
import Story from './Story'

export default function TopArticlesList() {
  // create a slice size
  const SLICE_SIZE = 10
  // create some state
    // allStoriesList
  const [allStoryIds, setAllStoryIds] = useState([])
    // slice (we're going to this bit more)
  const [slice, setSlice] = useState(1)

  const loadTopStories = async () => {
    // we're going to make the request to the backend
    const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json"
    const response = await fetch(TOP_STORIES_URL)
    const data = await response.json()
    setAllStoryIds(data)
  }

  // an effect
    // load all of the stories
    // I want you to do this.
  useEffect(()=> {
    // remember that we're just invoking this function
    // it's async but we're calling synchronously because of the
    // restrictions of the useEffect not able to handle async functions.
    loadTopStories()
  }, []) // on mount

  // let's take a look at allStoryIds
  useEffect(()=> {
    console.log(allStoryIds)
  }, [allStoryIds])

  // button handler to increase the slice size
  const increaseSliceSize = () => {
    // we're going to add one.
    setSlice(slice + 1)
  }


  // jsx
    // a list of story components (we'll do that later)
    // an MUI button that will be hooked to a method which
    // will increase the slice by one.
  return <>
      { // using knowledge of slice to get a subarray
        allStoryIds.slice(0, slice*SLICE_SIZE).map((storyId)=> {
          return <Story
            key={storyId}
            id={storyId}
          />
        })
        // on the button below we want increase the slice by one
      }
      <Button
        variant="contained"
        onClick={increaseSliceSize}
      >
        Load {SLICE_SIZE} more stories
      </Button>
  </>
}