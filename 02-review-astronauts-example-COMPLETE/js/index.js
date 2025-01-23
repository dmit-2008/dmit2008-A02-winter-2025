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
searchForm.addEventListener("submit", async (event)=> {
  event.preventDefault()

  // I want you to console.log the input from the search
  let searchInput = searchForm.elements["search"]

  console.log(searchInput.value)
  // I'm going call our function here
  await getAndRenderAstronautList(searchInput.value)
})


// what we're going to do is were's going to create a function
// that will render all astronauts.
// the reason we're doing this is so we can call this function
// and pass in a search argument.
const getAndRenderAstronautList = async (search) => {
  // get the data
  // pass in the search value to the get astronaut
  let data = await getAstronautList({
    search: search // I'm passing the value whether or not it exists.
  })
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
}


// when the document is loaded
document.addEventListener("DOMContentLoaded", async () => {
  // put all of our code in another function
  await getAndRenderAstronautList()
})