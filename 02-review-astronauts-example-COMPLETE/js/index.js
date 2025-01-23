// i'm going to import bootstrap
// as the first line so that
// the css is built.
import 'bootstrap/dist/css/bootstrap.min.css'

// we're going to import our api
import { getAstronautList } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

// I want you folks to select form
let searchForm = document.querySelector("#search-astronauts")
// I want you to add event listener
searchForm.addEventListener("submit", (event)=> {
  // I want you to console.log the input from the search
  let searchInput = searchForm.elements["search"]

  console.log(searchInput.value)
})




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
    // add to the element on the page.
    renderAstronautListItem(
      astronaut, // the data of the astronaut
      astronautListElement // the element we'll be appending to.
    )
  })

})