/*
WE're mocking out the rest api.
- isomorphic-fetch
  - fetch on node and fetch on the browser are different
  this package essentially bridge the gap
- msw (docs https://mswjs.io/)
  - allows you to mock the backend of your application
- jest-fixed-jsdom (https://github.com/mswjs/jest-fixed-jsdom)
  - next.js didn't take testing the api seriously
  - msw doesn't work perfect with next.js so we need to modify
  the jest.config.js to use this in their testEnvironment

*/
import 'isomorphic-fetch'
// make the node and browser fetch consistent

// this used to render the component
// complex state changes and select items with screen
import {render, act, screen} from '@testing-library/react'

// the matchers
import '@testing-library/jest-dom'

// the component we're testing
import Home from '../pages/index'

// we're going to import the base url
import { BASE_URL } from '../utils/api/base'

// this is going to be used to create the mock endpoints
// ref: https://mswjs.io/docs/getting-started#step-2-describe
import { http, HttpResponse } from 'msw'

// we're going to need to set up the server
// ref: https://mswjs.io/docs/getting-started#step-3-integrate

import { setupServer } from 'msw/node'

// have a quote that we're defining
// we're setting this up here because we're going to use
// it later one.
const QUOTE = "I am not a demon."
const AUTHOR = "Nicholas Cage"

// set up the mock endpoints
// in here we're going to create all of our
// mock endpoints we have a single mock endpoint
// in this application we're going to mock
// this is in `utils/api/quote`
const server = setupServer(
  // this will take one to as many endpoints as
  // arguments that you'd like.
  http.get(
    `${BASE_URL}/api/random_quote`, // this is the path to mock
    () => { // this will be the mock response.
      return HttpResponse.json({
        quote: QUOTE,
        author: AUTHOR
      })
    }
  )
)

// using the one time setup, docs here: https://jestjs.io/docs/setup-teardown#one-time-setup
// we'ere going to:
// run the server before all of the tests
beforeAll(()=> {
  // this is going to make it so server will intercept
  // the requests
  server.listen()
})
// close the server after all of the tests
afterAll(()=> {
  // turns off the server after the tests are done.
  server.close()
})

// we're going to perform two tests
// 1. check that quote loads on mount
// note "it" and "test" do the same thing.
it("should load a quote when page is loaded.", async ()=> {
  // we're doing a complex state change on mount
  await act(()=> {
    render(<Home />)
  })
  // we're going to get the elements containing the quote and author
  // docs: https://testing-library.com/docs/queries/bytestid
  const quoteElement = screen.getByTestId("quote")
  const authorElement = screen.getByTestId("author")

  // check that they have the expected quote!
  // let's make this test fail first
  // expect(quoteElement).not.toHaveTextContent(QUOTE)
  // remeber that toHaveTextContent is from testing library jest dom
  // the above test fails lets make them pass
  expect(quoteElement).toHaveTextContent(QUOTE)
  expect(authorElement).toHaveTextContent(AUTHOR)
})


// 2. we're going to check a new quote is loaded when button is clicked.
it("should load a new quote on button click", async ()=> {
  // the process of this test
  // 1. render the component
  await act(()=> {
    render(<Home />)
  })
  // 2. swap the response of the server to something new
  const NEW_QUOTE = "Family."
  const NEW_AUTHOR = "Vin Diesel"
  // we're going to use https://mswjs.io/docs/api/setup-server/use/
  // to implement this, what this is going to do is essentially make this
  // the api call on the same path with a different response
  server.use(

    http.get(
      `${BASE_URL}/api/random_quote`, // this is the path to mock
      () => { // this will be the mock response.
        return HttpResponse.json({
          // the only thing different is we're going to
          // return a new quote and a new author
          quote: NEW_QUOTE,
          author: NEW_AUTHOR
        })
      }
    )
  )

  // 3. get the button element
  let button = screen.getByTestId("new-quote-button")
  // 4. click the button
  await act(()=> {
    button.click()
  })
  // 5. get the author and quote elements
  const quoteElement = screen.getByTestId("quote")
  const authorElement = screen.getByTestId("author")

  // 6. assert!
  // let's make the tests fail first so they shouldn't equal
  // the first QUOTE and AUTHOR because we loaded a new
  // response
  // expect(quoteElement).toHaveTextContent(QUOTE)
  // expect(authorElement).toHaveTextContent(AUTHOR)
  // the above fails as expected
  expect(quoteElement).toHaveTextContent(NEW_QUOTE)
  expect(authorElement).toHaveTextContent(NEW_AUTHOR)
})