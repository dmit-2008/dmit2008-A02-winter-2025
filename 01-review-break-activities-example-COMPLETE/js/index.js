/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let newTopicForm = document.querySelector(".new-topic-form");
let topicList = document.querySelector(".topics-list");

const addTopicToPage = (topicValue, element) => {
  // append the innerHTML the html above.
  element.innerHTML += `<li class="list-group-item">
    ${topicValue}
  </li>`
}

newTopicForm.addEventListener("submit", (event)=> {
  event.preventDefault()

  // newTopicForm is the same as event.target in a submit
  // to get the input use the html "name" of the input in
  // the .elements
  let topicInput = newTopicForm.elements["new-topic"]

  // check to see that the value is not empty
  if (topicInput.value === "") {
    // we can add classes using the attribute classList
    // on an element
    topicInput.classList.add("is-invalid")
    // thisis invalid because the topic input is empty
    return // if hit nothing below this will execute.
  }
  // if it's here then it's valid.
  topicInput.classList.remove("is-invalid")
  // add the topic to the page.
  addTopicToPage(topicInput.value, topicList)
  // reset the form
  newTopicForm.reset()
})
