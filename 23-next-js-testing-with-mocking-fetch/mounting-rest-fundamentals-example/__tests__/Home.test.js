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
        quote: "",
        author: ""
      })
    }
  )
)


// run the server before all of the tests

// close the server after all of the tests


// we're going to perform two tests
// 1. check that quote loads on mount
// 2. we're going to check a new quote is loaded when button is clicked.
