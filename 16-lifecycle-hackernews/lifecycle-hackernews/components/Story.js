import { useState, useEffect } from "react"

export default function Story({id}) {
  // handle the loading state (set the default to true.)
  const [isLoading, setIsLoading] = useState(true)
  // make a story data stateful value.
  const [story, setStory] = useState({})

  // make a request to the url using the id
  const loadStory = async () => {
    // it's already loading so we dont' have to worry about that.
    const STORY_URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    const response = await fetch(STORY_URL)
    const data = await response.json()
    setStory(data)
    // if it's fetched successfully then it's not loading any more
    setIsLoading(false)
  }

  // use an effect that will load when the prop id has changed
  useEffect(()=> {
    // remember can't be async
    loadStory()
  }, [id]) // we're going to make it so that we listen to changes in the id.

  // let's see the changes in story data
  // purely debugging.
  useEffect(()=> {
    console.log(`loaded ${id}`)
    console.log(story)
  }, [story])

  // going handle all states and display the story data.
  // let's handle the loading state here.
  if (isLoading) {
    // this you can change to whatever you want for loading.
    return <p>
      Loading {id}...
    </p>
  }

  // let's update this so that I get the title and the by
  // if it gets to this point the data will be loaded successfully
  // we're going to build out this card next class.
  return <p>
    {story.title} by {story.by}
  </p>

}