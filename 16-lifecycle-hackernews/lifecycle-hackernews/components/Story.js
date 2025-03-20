import { useState, useEffect } from "react"

export default function Story({id}) {
  // handle the loading state (set the default to true.)
  const [isLoading, setIsLoading] = useState(true)
  // make a story data stateful value.
  const [story, setStory] = useState({})

  // make a request to the url using the id
  const loadStory = async () => {
    // it's already loading so we dont' have to worry about that.
    c


  }

  // use an effect that will load when the prop id has changed

  // going handle all states and display the story data.

  // let's handle the loading state here.
  if (isLoading) {
    // this you can change to whatever you want for loading.
    return <p>
      Loading {id}...
    </p>
  }


  return <p>
    {id}
  </p>

}