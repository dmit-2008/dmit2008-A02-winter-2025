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
  // this is in data.results from api.
  let astronauts = data.results
  // select the astronaut list item in the html
  let astronautListElement = document.querySelector(".astronaut-list")
  astronauts.map((astronaut) => {
    renderAstronautListItem(
      astronaut, // the data of the astronaut
      astronautListElement // the element we'll be appending to.
    )
  })

})