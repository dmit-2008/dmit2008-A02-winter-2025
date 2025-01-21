// i'm going to import bootstrap
// as the first line so that
// the css is built.
import 'bootstrap/dist/css/bootstrap.min.css'

// we're going to import our api
import { getAstronautList } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

// when the document is loaded
document.addEventListener("DOMContentLoaded", async () => {
  // get the data
  let data = await getAstronautList()
  console.log(data)
  // get the name of the first astronaut in the results
  console.log(data.results[0].name)
  // we're going to loop over the astronauts
  let astronauts = data.results

})