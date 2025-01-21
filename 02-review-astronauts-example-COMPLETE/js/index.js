// i'm going to import bootstrap
// as the first line so that
// the css is built.
import 'bootstrap/dist/css/bootstrap.min.css'

// we're going to import our api
import { getAstronautList } from './api/astronaut'

// when the document is oaded
document.addEventListener("DOMContentLoaded", async () => {
  // get the data
  let data = await getAstronautList()
  console.log(data)
})