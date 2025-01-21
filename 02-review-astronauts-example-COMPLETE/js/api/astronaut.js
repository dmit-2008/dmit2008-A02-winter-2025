const BASE_URL = "https://lldev.thespacedevs.com/2.3.0"

// api functions here.

// change the BASE_URL to use version 2.3.0
// create an async function
// return the data from the function
// export that function and import in index.js
// use that function print to the console.
const getAstronautList = async () => {
  const URL = `${BASE_URL}/astronauts/?mode=list`
  // that's going to fetch all the data
  const response = await fetch(URL, {
    method: "GET" // this is the default for the options on the request
    // normally here we add stuff like headers (authorization, content=type)
    // as the body if it's a post or patch request.
  })
  // parse the response which is going to convert the data to a js object
  const data = await response.json()

  return data
}
