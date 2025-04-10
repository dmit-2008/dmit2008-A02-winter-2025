// we're going to use a few libraries to make sure our testing works
// with react and next.js
// refer to here https://testing-library.com/docs/react-testing-library/example-intro for docs.
import {render, screen} from '@testing-library/react'
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

})
