// we're going to use a few libraries to make sure our testing works
// with react and next.js
// refer to here https://testing-library.com/docs/react-testing-library/example-intro for docs.


// if you're oging to do a simple state change (one) use
// fireEvent
// if you're going to do a more complex state change use act
import {render, act, fireEvent, screen} from '@testing-library/react'
// "render" is going to be used so that we can use our component inside
// of our testing environment
// "screen" is going to be used so that we can access dom items in different
// ways so tha we can test them.
import '@testing-library/jest-dom'
// this library is going to add a few different matchers to our
// expect so that we can test thing with the dom.

import TodoList from '../components/TodoList'
// what we're testing here.

// let's do a sample example
// so in jest the first argument is the descrpition
// the second is the test
test("test 2-1 is equal to 1", () => {
  // define a value
  const value = 2-1
  // we're first going to make our test fail to make sure that
  // it's not going to pass every time.
  // expect(value).toEqual(88)
  // as a note what you're testing is always on the left
  // and what you expect is on the right.

  // let's make the tests pass
  // note below .not does the opposite
  expect(value).not.toEqual(88)
  expect(value).toEqual(1)
})

// to get the hang of our testing we're going to check to see if the
// title exists (not a perfect, but will help us learn some fundamentals)
test("title is rendered successfully", ()=> {
  // we're going render the component so that we can
  // access it with screen afterwards
  const { container } = render(<TodoList />)
  // you could use the querySelector on the container


  // with screen what we're going to is we're going to fetch the
  // title element by text. We're going to do this with "screen queries"
  // reference: https://testing-library.com/docs/queries/about/#screen
  const titleElement = screen.getByText("Our Todo List")

  // can i debug to the console yes!
  // console.log(titleElement)
  // with jest-dom from testing library we're going to make our
  // tests fail first and then we're going to make them pass.
  // there's a whole bunch of matchers that are going to add here
  // to enable use to use the dom
  // reference https://github.com/testing-library/jest-dom#readme
  // the line below will
  // expect(titleElement).not.toBeInTheDocument()
  // the above failed let's make the test pass
  expect(titleElement).toBeInTheDocument()
})

test("todo item is added to the list successfully", ()=> {
  // the process of this test:
  // render the component
  render(<TodoList />)
  // get the input button and list elements via screen using different queries
  // https://testing-library.com/docs/queries/about/#screen
  const button = screen.getByText("add todo", {exact: false})
  const inputElement = screen.getByLabelText("New Todo")
  const listElement = screen.getByTestId('todo-item-list')
  // this what we'll type.
  const EXPECTED_VALUE = "You're almost done!"
  // above i'm putting this in a constant because we'll use it
  // a few times in the test.
  // "simulate" typing into the input
  // we're going to this with fire event (the change event)
  // reference: https://testing-library.com/docs/dom-testing-library/api-events/#fireevent
  fireEvent.change(
    inputElement, // the element to fire the event on
    {
      target: {
        value: EXPECTED_VALUE
      }
    }
  )
  // check that the input has the test value
  // make our tests fail first
  // expect(inputElement.value).not.toBe(EXPECTED_VALUE)
  // make our tests pass
  expect(inputElement.value).toBe(EXPECTED_VALUE)


  // "simulate" clicking the button
  // act is for a more complex state change
  act(()=> {
    button.click()
  })
  // to make my test fail i'm just going to check
  // that the input didn't change, below fails.
  // expect(inputElement.value).toBe(EXPECTED_VALUE)
  // make the tests pass
  // check to see that the input is empty
  expect(inputElement.value).toBe("")
  // check to see if the list has the string
  expect(listElement).toHaveTextContent(EXPECTED_VALUE)
})