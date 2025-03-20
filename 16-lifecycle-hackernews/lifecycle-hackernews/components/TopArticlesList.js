import { useState, useEffect } from 'react'

import Button from "@mui/material/Button"


export default function TopArticlesList() {
  // create a slice size
  const SLICE_SIZE = 5
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
  }, [])

  // let's take a look at allStoryIds
  useEffect(()=> {
    console.log(allStoryIds)
  }, [allStoryIds])


  // jsx
    // a list of story components (we'll do that later)
    // an MUI button that will be hooked to a method which
    // will increase the slice by one.
  return <>


      <Button variant="contained">Load {SLICE_SIZE} more stories</Button>
  </>
}