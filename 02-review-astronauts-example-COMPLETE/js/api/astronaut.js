const BASE_URL = "https://lldev.thespacedevs.com/2.3.0"

// api functions here.

// change the BASE_URL to use version 2.3.0
// create an async function
// return the data from the function
// export that function and import in index.js
// use that function print to the console.

// use object destructuring to pass in the object
const getAstronautList = async ({search}) => {
  // create a params obj
  let paramsObj = {
    mode: "list"
  }
  // if there's a search value add it to the object
  if (search) {
    paramsObj.search = search
  }
  console.log(paramsObj)
  // let's use URLSearchParams to convert this object into a string
  const params = new URLSearchParams(paramsObj)
  console.log(params.toString())
  // add the query parameters to the url.
  const URL = `${BASE_URL}/astronauts/?${params.toString()}`
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
// make this function availble to be imported in to other functions here.
export { getAstronautList }
