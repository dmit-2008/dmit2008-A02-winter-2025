/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

// create a function
// that's going to two arguments
// one is going to be the astronautData
// second is going to be an element
const renderAstronautListItem = (astronautData, element) => {
  // I want you append the innerHTML
  // with the html above
  console.log(astronautData)
  // use your knowledge of js objects to insert the data in the template string below.
  // nationality is an array of objects.
  let nationality = astronautData.nationality[0].nationality_name

  element.innerHTML += `<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <img src="${astronautData.image.thumbnail_url}" class="rounded float-start" alt=""">
      <h5 class="mb-1">${astronautData.name} (${astronautData.status.name})</h5>
      <small class="float-end">born ${astronautData.date_of_birth}</small>
    </div>
    <small>${nationality} (${astronautData.agency.abbrev})</small>
    <p class="mb-1">${astronautData.bio} </p>
  </li>`
}

// export that function
export { renderAstronautListItem }
// import in the js
// use it in the way that you think make sense.
